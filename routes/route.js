const express = require('express');
const router=express.Router();
const controller=require('../controllers/controller');

//Define routes
router.post('/', controller.createTodo);
router.get('/:id', controller.getTodoById);
router.put('/:id', controller.updateTodo);
router.delete('/:id', controller.deleteTodo);

module.exports= router;