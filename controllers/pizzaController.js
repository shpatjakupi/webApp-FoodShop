const Pizza = require('../models/pizza');

const pizza_index = (req,res) => {
    Pizza.find().sort({createdAt: -1})
        .then((result) =>{
            res.render('index', {title : 'All Menu', pizza: result})
        })
        .catch((err) =>{
            console.log(err);
        });
}

const pizza_details = (req,res) =>{
    const id = req.params.id.trim();
    console.log(id);
    Pizza.findById(id)
        .then((result)=>{
            console.log(result);
            res.render('details', {pizza : result, title : 'Pizza details'});
        })
        .catch((err)=>{
            console.log(err);
            res.status(404).render('404', { title: 'Pizza not found'});
        });
}

const pizza_create_get = (req,res) => {
    res.render('create',{title : 'create'});
}

const pizza_create_post = (req,res) => {
    const pizza = new Pizza(req.body);
    pizza.save()
        .then((result)=>{
            res.redirect('/menu');
        })
        .catch((err)=>{
            console.log(err);
        })
}

const pizza_delete = (req,res) => {
    const id = req.params.id.trim();
    Pizza.findByIdAndDelete(id)
        .then((result)=>{
            res.json({ redirect: '/menu'});
        })
        .catch((err)=>{
            console.log(err);
        })
}

module.exports = { // export an object with functions
    pizza_index,
    pizza_details,
    pizza_create_get,
    pizza_create_post,
    pizza_delete
};