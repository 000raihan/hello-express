const shortid = require('shortid');

let todoArray = [];

exports.updatePut = ('/todos/:todoId', (req, res) => {
    const { todoId } = req.params;
    const { text, isCompleted } = req.body;

    let todo = todoArray.find(todo => todo.id === todoId);

    if (!todo) {
        const todo = {
            id: shortid(),
            text: text,
            date: new Date(),
            isCompleted: true
        }
        todoArray.push(todo);
        res.status(201).json({ message: "todo created successfully", todo: todo })
    } else {
        todo.text = text || todo.text;
        todo.isCompleted = isCompleted || todo.isCompleted;

        const index = todoArray.findIndex(index => index.id === todoId);
        todoArray[index] = todo
        res.status(201).json({ message: "todo updated successfully" })
    }
})

exports.updatePatch = ('/todos/:todoId', (req, res) => {
    const { todoId } = req.params;
    const { text, isCompleted } = req.body;

    let todo = todoArray.find(todo => todo.id === todoId)

    if (todo) {
        todo.text = text || todo.text;
        todo.isCompleted = isCompleted || todo.isCompleted;

        const index = todoArray.findIndex(index => index.id === todoId);

        todoArray[index] = todo;
        res.status(201).json({ message: "todo Updated Successfully", ...todo })

    } else {
        res.status(404).json({ message: "todo not found" })
    }

});

exports.deleteTodo = ('/todos/:todoId', (req, res) => {
    const { todoId } = req.params;

    const index = todoArray.findIndex(todo => todo.id === todoId);
    if (index) {
        todoArray.splice(index);
        res.status(200).json({ message: "Todo deleted Successfully --" })
    } else {
        res.status(404).json({ message: "Todo not found" });
    }

});

exports.getOne = ('/todos/:todoId', (req, res) => {
    const { todoId } = req.params;
    const todo = todoArray.find(todo => todo.id === todoId);
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(200).json({ message: "todo not found" });
    }
    // console.log(todo);

    // res.status(200).json({ message: "Im called" })
})



exports.postTodo = ('/todos', (req, res) => {

    const { text } = req.body;

    const todo = {
        id: shortid(),
        text,
        date: new Date(),
        isCompleted: false
    }

    todoArray.push(todo);

    res.status(201).json({ message: "Todo created successfully", todo: todo })
})

exports.getAll = ('/todos', (req, res) => {
    const result = todoArray.map((todo) => ({ text: todo.text, id: todo.id }))
    res.status(200).json(result);

});