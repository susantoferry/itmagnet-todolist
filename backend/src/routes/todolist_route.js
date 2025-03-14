import express from "express";
import * as todoListService from "../service/todolist_service.js"

const router = express.Router();

router.get('/todolist', todoListService.getTodoList);
router.get('/todolist/:id', todoListService.getTodoListById);
router.post('/todolist', todoListService.createTodoList);
router.put('/todolist/:id', todoListService.updateTodoList);
router.delete('/todolist/:id', todoListService.deleteTodoList);

export default router;