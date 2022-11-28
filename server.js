require('dotenv').config();
const express = require('express');
const reactViews = require("express-react-views");
const mongoose = require("mongoose");
const methodOverride = require('method-override')
const app = express();
const port = 3000;
const db = mongoose.connection;

const Logs = require('./models/logs');
const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", (err) => console.log(err));
db.on("open", () => console.log("mongo connected"));
db.on("close", () => console.log("mongo disconnected"));


//View engine setup
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

//Middleware setup
app.use((req,res,next)=>{
    next();
});

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

//Index
app.get('/logs',(req,res)=>{
    Logs.find({})
        .then((logs)=>{
            res.render("Index", {
              logs: logs,
            });
        })
        .catch((err)=>{
            res.send(err);
        })
});

//New Page
app.get('/logs/new',(req,res)=>{
    res.render('New');
});

//Create
app.post('/logs',(req,res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else{
        req.body.shipIsBroken = false;
    }

    Logs.create(req.body)
        .then((log) => {
            res.redirect('/logs');
        })
        .catch((err) => {
            res.send(err);
        })
});
//Show 
app.get('/logs/:id',(req,res)=>{
    Logs.findById(req.params.id)
        .then((log)=>{
            res.render('Show',{
                log: log
            })
        })
        .catch((err) =>{
            res.send(err);
        })
})

//Edit
app.get('/logs/:id/edit', (req,res)=>{
    Logs.findById(req.params.id)
        .then((log)=>{
            res.render('Edit',{
                log: log
            });
        })
        .catch((err)=>{
            res.send(err);
        })
})

//Update
app.put('/logs/:id',(req,res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else{
        req.body.shipIsBroken = false;
    }

    Logs.findByIdAndUpdate(req.params.id, req.body)
        .then((log)=>{
            res.redirect(`/logs/${req.params.id}`);
        })
        .catch((err)=>{
            res.send(err);
        })
})


app.listen(port,()=>{
    console.log('listening on port', port);
});