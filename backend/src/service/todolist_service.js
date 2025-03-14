import * as todoListController from "../controllers/todolist_controller.js";

export const getTodoList = async (req, res) => {
  try {
    const [todolist] = await todoListController.getTodoList();

    res.status(200).json(todolist);

  } catch (err) {
    console.error("Error fetching TodoListL: ", err);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const getTodoListById = async (req, res) => {
  try {
    const todoListId = req.params.id;

    const todoListById = await todoListController.getTodoListById(todoListId);
    res.status(200).json(todoListById);

  } catch (err) {
    console.error("Error fetching TodoList by Id: ", err);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const createTodoList = async (req, res) => {
  try {
    const todoListData = req.body;

    const todoList = await todoListController.createTodoList(todoListData);

    res.status(200).json(todoList);
  } catch (err) {
    console.error("Error creating new TodoList: ", err);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const updateTodoList = async (req, res) => {
  try {
    const todoListId = req.params.id;
    const todoListData = req.body;

    const todoList = await todoListController.updateTodoList(todoListId, todoListData);

    res.status(200).json(todoList)
  } catch (err) {
    console.error("Error updating TodoList data: ", err);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const deleteTodoList = async (req, res) => {
  try {
    const todoListId = req.params.id;

    const todoList = await todoListController.deleteTodoList(todoListId);

    res.status(200).json({
      message: "Todolist data has been deleted successfully"
    })
  } catch (err) {
    console.error("Error deleting TodoList data: ", err);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}