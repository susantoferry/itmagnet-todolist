import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const url = "http://localhost:4000/api";

  // Fetching TodoList Data
  const fetchTodoList = async () => {
    try {
      const response = await axios.get(`${url}/todolist`);
      setTodoList(response.data);
    } catch (err) {
      console.error("Error fetching dataa: ", err);
    }
  };

  // Update Todo Data
  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setOpenForm(true);
  };
  

  // Delete Todo Data
  const handleDeleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${url}/todolist/${id}`);

      console.log(response.data);
      fetchTodoList();
    } catch (err) {
      console.error(`Error deleting dataa: ${err}`);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <div className="p-5">
      <div
        className={`
        ${
          openForm ? "block absolute" : "none"
        } bg-[#212121] opacity-70 w-full h-full p-0 m-0 inset-0
        transition-all duration-500 ease-in-out`}
      />
      <h1 className="font-bold mb-4">ToDo List CRUD</h1>

      <div className="mb-4">
        <button
          className="py-2 px-4 bg-[#37d077] rounded-full"
          onClick={() => setOpenForm(true)}
        >
          Add new todoList
        </button>
      </div>

      <div>
        <table>
          <thead>
            <tr className="text-left">
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo, index) => (
              <tr key={index}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>
                  <div className={`px-4 py-1 rounded-full bg-blue-400 text-center`}>
                    {todo.status === 0 ?
                      "Todo" : todo.status === 1 ?
                        "In Progress" : "Done"
                    }
                  </div>
                </td>
                <td className="flex gap-2">
                  <button onClick={() => handleEditTodo(todo)}>
                    <EditIcon className="text-orange-300"/>
                  </button>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    <DeleteOutlineIcon className="text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openForm && (
        <TodoForm
          setOpenForm={setOpenForm}
          fetchTodo={fetchTodoList}
          editTodo={editTodo}
        />
      )}
    </div>
  );
}

export default App;
