// create another component which is going to be our table iside the table
// component we are going to call another component which is going to be our TODorowItem

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

        <TodoRowItem todo={props.todos[0]}/>
        <TodoRowItem todo={props.todos[1]}/>
        <TodoRowItem todo={props.todos[2]}/>
        <TodoRowItem todo={props.todos[3]}/>


        </tbody>
        </table>
    )

}