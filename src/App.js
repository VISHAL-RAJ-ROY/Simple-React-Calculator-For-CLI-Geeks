import React from 'react'
import InputPlace from './components/inputPlace'


const App = () => {

  const handleSubmittedExpression = expression => {
    
  }

  return (
    <>
      <h1>React Calculator</h1>
      <InputPlace handleSubmittedExpression={handleSubmittedExpression} />
    </>
  )

}

export default App