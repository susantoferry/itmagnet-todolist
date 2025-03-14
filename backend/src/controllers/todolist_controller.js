import db from "../db.js"

export const getTodoList = async () => {
  const sql = "SELECT * FROM todolist"
  const todolists = await db.execute(sql);

  return todolists;
}

export const getTodoListById = async (id) => {
  const sql = "SELECT * FROM todolist WHERE id = ?"
  const todolist = await db.execute(sql, [id]);

  return todolist;
}

export const createTodoList = async (todoListData) => {
  const { title, description, status } = todoListData;

  const sql = "INSERT INTO todolist (title, description, status) VALUES (?, ?, ?)";
  const result = await db.execute(sql, [title, description, status]);
  return result;
}

export const updateTodoList = async (id, todoListData) => {
  const { title, description, status } = todoListData;

  const sql = "UPDATE todolist SET title = ?, description = ?, status = ? WHERE id = ? ";
  const result = await db.execute(sql, [title, description, status, id])

  return result;
}

export const deleteTodoList = async (id) => {
  const sql = "DELETE FROM todolist WHERE id = ?"
  const result = await db.execute(sql, [id]);
  
  return result;
}