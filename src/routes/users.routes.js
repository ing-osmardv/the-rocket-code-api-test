const {Router} = require('express');
const { createUserController } = require('../controllers/users.controllers');

const router = Router();

router.post('/', [], createUserController)

module.exports = router;