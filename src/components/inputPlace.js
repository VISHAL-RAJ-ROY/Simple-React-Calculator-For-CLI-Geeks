import React , { useState, useEffect } from 'react'
var mexp = require('math-expression-evaluator');

const InputPlace = props => {

    const defaultValue = 'not calculated'

    const [expression, setExpression] = useState({...props.currentExpression})

    const [value, setValue] = useState(defaultValue)

    const dummyExpression = { id : null, expression : '', value : '' }

    const handleChangeExpression = event => {
        const {name, value} = event.target
        setExpression({...expression, [name]:value})
    }

    useEffect(()=>{
        setValue(defaultValue)
        setExpression({...props.currentExpression})
    },[props.currentExpression])

    return (
        <form
            onSubmit = {
                event => {
                    event.preventDefault()
                    if( expression.expression === '' ) return 
                    let calculatedValue
                    try {
                        calculatedValue = mexp.eval(expression.expression)
                    } catch(e) {
                        props.handleIncorrect(true)
                        return
                    }
                    props.handleIncorrect(false)
                    expression.value = calculatedValue
                    props.handleSubmittedExpression(expression)
                    setExpression(dummyExpression)
                    props.emptyCurrentExpression()
                }
            }
        >
            <label>Enter expression here</label>
            <input type="text" name="expression" value={expression.expression} onChange={handleChangeExpression} ></input>
            <button>Submit</button>
            <button onClick={()=>{ props.handleIncorrect(false); setExpression(dummyExpression)}}>Clear</button>
            { value !== defaultValue ? value : '' }
        </form>
    )

}

export default InputPlace