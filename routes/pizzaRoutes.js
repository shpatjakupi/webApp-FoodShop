const express = require('express');
const pizzaController = require('../controllers/pizzaController');

const router = express.Router();


router.get('/',pizzaController.pizza_index);
router.get('/:id',pizzaController.pizza_details);
router.get('/pizza/create',pizzaController.pizza_create_get);
router.post('/',pizzaController.pizza_create_post);
router.delete('/:id',pizzaController.pizza_delete);


module.exports = router;