const express = require('express');
const router = express.Router();
const Logs = require('../models/logs');

//Index
router.get('/',(req,res)=>{
    Logs.find({})
        .then((logs)=>{
            res.render("logs/Index", {
              logs: logs,
            });
        })
        .catch((err)=>{
            res.send(err);
        })
});

//New Page
router.get('/new',(req,res)=>{
    res.render('logs/New');
});

//Create
router.post('/',(req,res)=>{
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
router.get('/:id',(req,res)=>{
    Logs.findById(req.params.id)
        .then((log)=>{
            res.render('logs/Show',{
                log: log,
                comments: log.comments
            })
        })
        .catch((err) =>{
            res.send(err);
        })
})

//Edit
router.get('/:id/edit', (req,res)=>{
    Logs.findById(req.params.id)
        .then((log)=>{
            res.render('logs/Edit',{
                log: log
            });
        })
        .catch((err)=>{
            res.send(err);
        })
})

//Update
router.put('/:id',(req,res)=>{
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

//Delete
router.delete('/:id',(req,res)=>{
    Logs.findByIdAndDelete(req.params.id)
    .then((log)=>{
        console.log(log);
        res.redirect('/logs');
    })
    .catch((err)=>{
        res.send(err);
    })
})

//==== Comments ====

 router.post('/:id',(req,res)=>{
    Logs.findByIdAndUpdate(req.params.id)
        .then((log)=>{
            log.comments.push(req.body);
            log.save()
            res.redirect(`/logs/${req.params.id}`);
        })
        .catch((err)=>{
            res.send(err);
        })

})

module.exports = router;
