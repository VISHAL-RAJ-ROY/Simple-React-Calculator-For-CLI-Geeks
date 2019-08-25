import React, { useState } from 'react'
import InputPlace from './components/inputPlace'
import History from './components/history.js'

const App = () => {

  const calculate = () => {
    return ''
  }

  const handleSubmittedExpression = expression => {
    expression.id = listSize+1
    setListSize(expression.id)
    expression.value = calculate(expression.expression)
    setExpressionList([expression,...expressionList])
  }

  const dummyExpressionList = [
    { id : 1, expression : '3+5', value : '8' },
    { id : 2, expression : '3+5*(9+4/2)', value : '58' },
    { id : 3, expression : '3*14/6+5', value : '12' }
  ]

  const dummyExpression = { id : null, expression : '', value : '' }

  const handleUse = expression => setCurrentExpression({...expression})

  const handleDelete = id => setExpressionList(expressionList.filter(expression => expression.id !== id))

  const emptyCurrentExpression = () => setCurrentExpression(dummyExpression)

  const [expressionList, setExpressionList] = useState(dummyExpressionList)

  const [currentExpression, setCurrentExpression] = useState(dummyExpression)

  const [listSize, setListSize] = useState(dummyExpressionList.length)

  return (
    <>
      <h1>React Calculator</h1>
      <InputPlace emptyCurrentExpression={emptyCurrentExpression} currentExpression={currentExpression} handleSubmittedExpression={handleSubmittedExpression} />
      <History handleUse={handleUse} handleDelete={handleDelete} expressionList={expressionList} />
    </>
  )

}

export default App