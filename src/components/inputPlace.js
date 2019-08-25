import React , { useState } from 'react'

const InputPlace = props => {

    const emptyExpression = ''

    const [expression, setExpression] = useState(emptyExpression)

    const handleChangeExpression = event => {
        const {name, value} = event.target
        console.log(value)
        setExpression(value)
    }

    const isValidExpression = expression => {
        return true
    }

    return (
        <form
            onSubmit = {
                event => {
                    event.preventDefault()
                    if( !isValidExpression(expression) || expression == '' ) return 
                    props.handleSubmittedExpression(expression)
                }
            }
        >
            <label>Enter expression here</label>
            <input type="text" name="expression" value={expression} onChange={handleChangeExpression} ></input>
            <button>Submit</button>
        </form>
    )

}

export default InputPlace