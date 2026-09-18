export function TodoRowItem(props){

    const rowNumber = props.todo.rowNumber
    const rowDescription = props.todo.rowDescription
    const rowAssigned = props.todo.rowAssigned

    return(

        // <tr onClick={() => props.deleteTodo(rowNumber)}>
        <tr>
            <td>{rowNumber}</td>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
            <td>

                {/*<button style={{marginRight: '5px', backgroundColor: '#ffc107', borderColor: '#ffc107', color: 'black'}}>Update</button>*/}

                <button onClick={() => props.deleteTodo(rowNumber)} style={{backgroundColor: '#dc3545', borderColor: '#dc3545'}}>Delete</button>
            </td>
        </tr>
    )
}
