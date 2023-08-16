// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

// eslint-disable-next-line react/prop-types
function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    const handleSubmit = ((e) => {
        e.preventDefault()
        if(newItem === "") return
        onSubmit(newItem)
        setNewItem("")
    })

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    );
}

export default NewTodoForm;