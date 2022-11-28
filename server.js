require('dotenv').config();
const express = require('express');
const reactViews = require("express-react-views");
const mongoose = require("mongoose");
const methodOverride = require('method-override')
const app = express();
const logControllers = require('./controllers/logController')
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

//==== Routes ====

app.use('/logs', logControllers)

//Listen on port 
app.listen(port,()=>{
    console.log('listening on port', port);
});