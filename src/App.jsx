import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm"
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!task) return;
    if (editId) {
      setTodos(todos.map((t) => (t.id === editId ? { ...t, text: task } : t)));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task }]);
    }
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (todo) => {
    setTask(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-600">
      <TodoForm
        handleAdd={handleAdd} task={task} setTask={setTask} editId={editId} todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
