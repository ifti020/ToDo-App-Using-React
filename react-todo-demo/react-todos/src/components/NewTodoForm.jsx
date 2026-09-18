import {useState} from 'react'
export function NewTodoForm()
{
    const [assigned, setAssigned] = useState('')
    const[description, setDescription] = useState('')

    const handleSubmit =(e) =>{
        e.preventDefault();

        if(assigned.trim() && description.trim()){
            console.log(assigned)
            console.log(description)

            setAssigned('')
            setDescription('')
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Assigned Task</label>
                <input
                    type = "text"
                    required
                    value={assigned}
                    onChange={(e) =>
                    { setAssigned(e.target.value)}}/>
            </div>
                <div>
                    <label>Task Description</label>
                    <textarea
                        rows={4}
                        required
                        value={description}
                    onChange={(e)=>
                    { setDescription(e.target.value) }}>

                    </textarea>
                </div>
                <button> Add Todo</button>
            </form>
        </div>
    )
}