const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

// POST /todos - Create a new to-do
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    try {
        const todo = new Todo({ title, description });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create to-do' });
    }
});

// GET /todos - Retrieve all to-dos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve to-dos' });
    }
});

// GET /todos/:id - Retrieve a specific to-do by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id);
        if (!todo) return res.status(404).json({ error: 'To-do not found' });
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve to-do' });
    }
});

// PUT /todos/:id - Update a specific to-do by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
        const todo = await Todo.findByIdAndUpdate(
            id,
            { title, description, completed },
            { new: true }
        );
        if (!todo) return res.status(404).json({ error: 'To-do not found' });
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update to-do' });
    }
});

// DELETE /todos/:id - Delete a specific to-do by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) return res.status(404).json({ error: 'To-do not found' });
        res.status(200).json({ message: 'To-do deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete to-do' });
    }
});

module.exports = router;
