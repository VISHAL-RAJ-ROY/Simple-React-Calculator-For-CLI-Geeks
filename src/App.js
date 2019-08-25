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
    setExpressionList([...expressionList,expression])
  }
  const dummyExpressionList = [
    { id : 1, expression : '3+5', value : '8' },
    { id : 2, expression : '3+5*(9+4/2)', value : '58' },
    { id : 3, expression : '3*14/6+5', value : '12' }
  ]

  const handleDelete = id => setExpressionList(expressionList.filter(expression => expression.id !== id))

  const [expressionList, setExpressionList] = useState(dummyExpressionList)

  const [listSize, setListSize] = useState(dummyExpressionList.length)

  return (
    <>
      <h1>React Calculator</h1>
      <InputPlace handleSubmittedExpression={handleSubmittedExpression} />
      <History handleDelete={handleDelete} expressionList={expressionList} />
    </>
  )

}

export default App