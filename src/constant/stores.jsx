import './style.css'
const STORES_COLUMNS = (deleteHandler, editHandler) => [
    {
        key: "id",
        title: "ID"
    },
    {
        key: "name",
        title: "Title"
    },
    {
        key: "cities",
        title: "Cities"
    },
    {
        key: "actions",
        title: "Actions",
        render: (data) => (
            <div className="actions_container" onClick={(e) => e.stopPropagation()} >
                <button onClick={() => editHandler(data.id)} name='edit-btn'>Edit</button>
                <button onClick={() => deleteHandler(data.id)} name='delete-btn'>Delete</button>
            </div>
        )
    }
]

export default STORES_COLUMNS