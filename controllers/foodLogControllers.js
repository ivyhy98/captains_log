const express = require("express");
const router = express.Router();
const FoodLogs = require('../models/foodLogs')

//seedroute data
const startLogs = [
  {
    title: "It was a good day",
    thoughts: "Happy",
    food: "Chicken Tenders and fries with Honey Mustard",
  },
  {
    title: "Everyday can't be perfect",
    thoughts: "Eh",
    food: "Dry sandwhich ",
  },
  {
    title: "I hate it here",
    thoughts: "Upset",
    food: "Broccoli and Beans",
  },
];

//Seed
router.get('/seed',(req,res)=>{
    FoodLogs.create(startLogs)
            .then((logs)=>{
                res.redirect('/foodlogs');
            })
            .catch((err)=>{
                res.send(err);
            })
})

//Index
router.get('/',(req,res)=>{
    FoodLogs.find({})
        .then((logs)=>{
            res.render("foodlogs/Index", {
              logs: logs,
            });
        })
        .catch((err)=>{
            res.send(err);
        })
});

//New
router.get('/new',(req,res)=>{
    res.render('foodlogs/New');
});

//Create
router.post('/',(req,res)=>{
    FoodLogs.create(req.body)
            .then((logs)=>{
                res.redirect('/foodlogs');
            })
            .catch((err)=>{
                res.send(err);
            })
});

//Show
router.get('/:id',(req,res)=>{
    FoodLogs.findById(req.params.id)
            .then((log)=>{
                res.render('foodlogs/Show',{
                    log: log,
                    comments: log.comments
                })
            })
            .catch((err)=>{
                res.send(err);
            })
});

//Delete
router.delete('/:id',(req,res)=>{
    FoodLogs.findByIdAndRemove(req.params.id)
            .then((logs)=>{
                res.redirect('/foodlogs')
            })
            .catch((err)=>{
                res.send(err)
            })
});

//Edit
router.get('/:id/edit',(req,res)=>{
    FoodLogs.findById(req.params.id)
            .then((log)=>{
                res.render('foodlogs/Edit',{
                    log: log,
                })
            })
            .catch((err)=>{
                res.send(err);
            })
});

//Update
router.put('/:id',(req,res)=>{
    FoodLogs.findByIdAndUpdate(req.params.id, req.body)
            .then((log)=>{
                res.redirect(`/foodlogs/${req.params.id}`);
            })
            .catch((err)=>{
                res.send(err);
            })
});


//==== Comments ====

 router.post('/:id',(req,res)=>{
    FoodLogs.findByIdAndUpdate(req.params.id)
        .then((log)=>{
            log.comments.push(req.body);
            log.save()
            res.redirect(`/foodlogs/${req.params.id}`);
        })
        .catch((err)=>{
            res.send(err);
        })

});

module.exports = router;