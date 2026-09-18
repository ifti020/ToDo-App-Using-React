export function TodoRowItem(){

    const rowNumber = 1
    const rowDescription = 'Feed Chicken'
    const rowAssigned = 'Ifti Haque'

    return(

        <tr>
            <td>{rowNumber}</td>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
}
