const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const pizzaRoutes = require('./routes/pizzaRoutes');

// express app
const app = express();

//connector to mongodb
const db = 'mongodb+srv://shja:Jordguld1!1234@cluster.7edvje7.mongodb.net/shja-db?retryWrites=true&w=majority';
mongoose.connect(db)
    .then((result)=>app.listen(3002))
    .catch((err) => console.log(err));


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));



// register view engine
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.redirect('/menu');
})

app.get('/about',(req,res) => {
    //res.send('<p>Home page</p>'); 
    res.render('about',{title : 'about'});
})

//routes
app.use('/menu',pizzaRoutes);



// 404 page run code from top to bottom if not found any then page is 404. Must be at the bottom
// if nothing matches then "Catch" a 404 
app.use((req,res) => {
    res.status(404).render('404',{title : '404'});
}) 

