require('dotenv').config();
const express = require('express');
const reactViews = require("express-react-views");
const mongoose = require("mongoose");

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

//Index
app.get('/logs',(req,res)=>{
    Logs.find({},(err, foundLogs)=>{
        res.render("Index", {
            logs: foundLogs,
        });
    })
});
//New Page
app.get('/logs/new',(req,res)=>{
    res.render('New');
});

app.post('/logs',(req,res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else{
        req.body.shipIsBroken = false;
    }

    Logs.create(req.body,(err, createdLog)=>{
        if(!err){
            res.status(200).redirect('/logs');
        } else{
            res.status(400).send(err);
        }
    });
});

app.get('/logs/:id',(req,res)=>{
    Logs.findById(req.params.id,(err, foundLog)=>{
        if(!err){
            res.render('Show',{
                log: foundLog,
            })
        } else{
            res.send(err);
        }
    })
})


app.listen(port,()=>{
    console.log('listening on port', port);
});