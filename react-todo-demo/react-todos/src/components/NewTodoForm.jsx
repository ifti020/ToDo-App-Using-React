export function NewTodoForm()
{
    return (
        <div>
            <form>
            <div>
                <label>Assigned Task</label>
                <input type = 'text' required />
            </div>
                <div>
                    <label>Task Description</label>
                    <textarea rows={4} required></textarea>
                </div>
                <button> Add Todo</button>
            </form>
        </div>
    )
}