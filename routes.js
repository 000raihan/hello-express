const router = require('express').Router();

const controller = require('./controller');

router.delete('/:todoId', controller.deleteTodo)
router.patch('/:todoId', controller.updatePatch)
router.put('/:todoId', controller.updatePut)
router.get('/:todoId', controller.getOne)

router.post('/', controller.postTodo)
router.get('/', controller.getAll)

module.exports = router;