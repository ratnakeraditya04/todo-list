import express from 'express';
import { addTodo } from '../controller/todo-controller.js';
const route = express.Router();

// Whenever our endpoint fxn '/todos'  is hit our callback function is called 
route.post('/todos', addTodo);



export default route;