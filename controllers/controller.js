const Todo = require('../model/model');

// Create a new to-do item
exports.createTodo = async (req, res) => {
    const { task } = req.body;
    try {
      const newTodo = new Todo({ task });
      await newTodo.save();
      res.json(newTodo);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create to-do item' });
    }
  };
  
  // Get to-do item
  exports.getTodoById = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id); // Find by ID
        if (!todo) {
            return res.status(404).json({ error: 'To-do item not found' });
        }
        res.json(todo); // Send the found item as JSON
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch the to-do item' });
    }
};
  
  // Update a to-do item's completion status
  exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findById(id);
      if (!todo) {
        return res.status(404).json({ error: 'To-do item not found' });
      }
      todo.completed = !todo.completed;
      await todo.save();
      res.json(todo);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update to-do item' });
    }
  };
  
  // Delete a to-do item
  exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findByIdAndDelete(id);
      if (!todo) {
        return res.status(404).json({ error: 'To-do item not found' });
      }
      res.json({ message: 'To-do item deleted' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete to-do item' });
    }
  };