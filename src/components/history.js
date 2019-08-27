import React from 'react'

const History = props => {
    return (
        <div className="f2">
            <h4>I am History</h4>
            <table>
                <thead>
                    <tr>
                        <th>Expression</th>
                        <th>Value</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.expressionList.length > 0 ? (
                            props.expressionList.map(
                                expression => (
                                    <tr key = {expression.id}>
                                        <td>{expression.expression}</td>
                                        <td>{expression.value}</td>
                                        <td>
                                            <button onClick = {()=>props.handleUse(expression)}>Use</button>
                                            <button onClick = {()=>props.handleDelete(expression.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            )
                        ) : (
                            <tr>
                                <td colSpan={3}>No Expressions!!</td>
                                {/* <td ></td>
                                <td >No Expressions!!</td>
                                <td ></td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default History