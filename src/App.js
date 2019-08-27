import React, { useState } from 'react'
import InputPlace from './components/inputPlace'
import History from './components/history.js'

const App = () => {

  const handleSubmittedExpression = expression => {
    expression.id = listSize+1
    setListSize(expression.id)
    setExpressionList([expression,...expressionList])
  }

  const dummyExpressionList = [
    { id : 1, expression : '3+5', value : '8' },
    { id : 2, expression : '3+5*(9+4/2)', value : '58' },
    { id : 3, expression : '3*14/6+5', value : '12' }
  ]

  const dummyExpression = { id : null, expression : '', value : '' }

  const handleUse = expression => { 
    setIsCorrect(true)
    setCurrentExpression({...expression})
  }

  const handleDelete = id => setExpressionList(expressionList.filter(expression => expression.id !== id))

  const handleIncorrect = val => setIsCorrect(!val)

  const emptyCurrentExpression = () => setCurrentExpression(dummyExpression)

  const [expressionList, setExpressionList] = useState(dummyExpressionList)

  const [currentExpression, setCurrentExpression] = useState(dummyExpression)

  const [listSize, setListSize] = useState(dummyExpressionList.length)

  const [isCorrect, setIsCorrect] = useState(true)

  return (
    <>
      <h1>React Calculator</h1>
      <InputPlace setIsCorrect={setIsCorrect} handleIncorrect={handleIncorrect} emptyCurrentExpression={emptyCurrentExpression} currentExpression={currentExpression} handleSubmittedExpression={handleSubmittedExpression} />
      <span>
        {!isCorrect ? 'Incorrect!!' : '' }
      </span>
      <History handleUse={handleUse} handleDelete={handleDelete} expressionList={expressionList} />
    </>
  )

}

export default App