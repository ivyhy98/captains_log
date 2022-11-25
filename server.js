require('dotenv').config();
const express = require('express');
const reactViews = require("express-react-views");
const app = express();
const port = 3000;


//View engine setup
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

//Middleware setup
app.use((req,res,next)=>{
    next();
});

app.use(express.urlencoded({extended:false}));

app.get('/logs',(req,res)=>{
    res.send('home')
})

app.get('/logs/new',(req,res)=>{
    res.render('New');
});

app.post('/logs',(req,res)=>{
    res.send(req.body);
})
app.listen(port,()=>{
    console.log('listening on port', port);
});