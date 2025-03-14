import axios from "axios";
import React, { useState } from "react";

const TodoForm = ({ setOpenForm, fetchTodo, editTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorStatus, setErrorStatus] = useState("");

  const url = "http://localhost:4000/api";

  const options = [
    { id: 0, name: "Todo" },
    { id: 1, name: "In Progress" },
    { id: 2, name: "Done" },
  ];

  // setValues

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== "" && description !== "" && status !== "") {
      const response = await axios.post(`${url}/todolist`, {
        title,
        description,
        status,
      });
      console.log(response.data)
      fetchTodo();
      setOpenForm(false);
    } else {
      setErrorTitle("Title cannot be empty");
      setErrorDescription("Description cannot be empty");
      setErrorStatus("Status must be selected");
    }
  };

  return (
    <div className="absolute w-full flex justify-center">
      <div className="w-1/2 bg-slate-200 rounded-xl p-5">
        <h1 className="text-xl font-semibold mb-4 text-center">Todo Form</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block !mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full h-10 rounded-lg px-2"
              placeholder="Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>
              {errorTitle && title === "" && (
                <span className="text-xs text-red-700">{errorTitle}</span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block !mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows={5}
              cols={30}
              className="w-full rounded-lg p-2"
              placeholder="Description..."
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div>
              {errorDescription && description === "" && (
                <span className="text-xs text-red-700">{errorDescription}</span>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="status" className="block !mb-2">
              Status
            </label>

            <select
              name="status"
              className="w-full h-10 rounded-lg px-2"
              onChange={(e) => setStatus(e.target.value)}
            >
              {options.map((opt, index) => (
                <option value={opt.id} key={index}>
                  {opt.name}
                </option>
              ))}
            </select>
            <div>
              {errorStatus && status === "" && (
                <span className="text-xs text-red-700">{errorStatus}</span>
              )}
            </div>
          </div>

          <div className="flex gap-2 my-4 justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-[#45fd7c] rounded-full
            transition-all duration-300 ease-in-out hover:bg-[#2cd646]"
            >
              Save
            </button>

            <button
              className="px-6 py-2 bg-transparent border border-[#f8575a] rounded-full text-[#f8575a]
            transition-all duration-300 ease-in-out hover:bg-[#f53336] hover:text-white"
              onClick={() => setOpenForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
