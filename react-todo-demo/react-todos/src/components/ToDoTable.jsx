// create another component which is going to be our table inside the table
// component we are going to call another component which is going to be our TODoRowItem

import {TodoRowItem} from './ToDoRowItem'
export function ToDoTable(props) {

    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Description</th>
                <th>Assigned</th>
            </tr>
            </thead>
        <tbody>
        {/*// making the list dynamic*/}
        {/*we need touse the map functionality that allows us to loop through all the item in our props todos*/}
        {/*and create a to-do row item for it.*/}

        {/*here we looping through each item in our array,pooling out each item and then assigningit to the to-do item*/}
        {props.todos.map(todo => (
            <TodoRowItem key={todo.rowNumber} todo={todo}/>
        ) ) }
        </tbody>
        </table>
    )

}