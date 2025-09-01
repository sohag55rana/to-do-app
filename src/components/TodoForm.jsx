import React from 'react'

export default function TodoForm({ handleAdd, task, setTask, editId, todos, handleEdit, handleDelete }) {
    return (
        <div>
            <div className="bg-white shadow-xl p-6 rounded-xl w-96">
                <h1 className="text-4xl font-bold text-center mb-15">Todo App</h1>

                {/* Form */}
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        placeholder="Enter a task..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="input input-bordered w-full"
                    />
                    <button onClick={handleAdd} className="btn btn-primary">
                        {editId ? "Update" : "Add"}
                    </button>
                </div>

                {/*  List item*/}
                <ul className="space-y-3">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
                        >
                            <span>{todo.text}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(todo)}
                                    className="btn btn-sm btn-info"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(todo.id)}
                                    className="btn btn-sm btn-error"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
