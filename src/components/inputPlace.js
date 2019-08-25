import React , { useState, useEffect } from 'react'

const InputPlace = props => {

    const emptyExpression = {id:null, expression:'', value:''}

    const [expression, setExpression] = useState(emptyExpression)

    const handleChangeExpression = event => {
        const {name, value} = event.target
        setExpression({...expression, [name]:value})
    }

    const isValidExpression = expression => {
        return true
    }

    return (
        <form
            onSubmit = {
                event => {
                    event.preventDefault()
                    if( !isValidExpression(expression.expression) || expression.expression == '' ) return 
                    props.handleSubmittedExpression(expression)
                    setExpression(emptyExpression)
                }
            }
        >
            <label>Enter expression here</label>
            <input type="text" name="expression" value={expression.expression} onChange={handleChangeExpression} ></input>
            <button>Evaluate</button>
            <button>Submit</button>
        </form>
    )

}

export default InputPlace