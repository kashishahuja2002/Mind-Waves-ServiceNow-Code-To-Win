const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authenticate = require('../services/auth')
const cron = require('node-cron')

router.post('/login',(req,res,next)=>{

    userController.saveUser(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })

})




router.get('/weeklyactivity',authenticate.authenticate,(req,res,next)=>{

    userController.weeklyactivity(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })

})


router.get('/monthlyactivity',authenticate.authenticate,(req,res,next)=>{

    userController.monthlyactivity(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })

})



router.post('/addwater',authenticate.authenticate,(req,res,next)=>{

    userController.addwater(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })


})


router.post('/addexercise',authenticate.authenticate,(req,res,next)=>{

    userController.addexercise(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })


})



router.post('/addmeditation',authenticate.authenticate,(req,res,next)=>{

    userController.addmeditaton(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })


})


router.post('/addmood',authenticate.authenticate,(req,res,next)=>{

    userController.addmood(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })


})


router.get('/badges',authenticate.authenticate,(req,res,next)=>{

    userController.getbadges(req)

    .then(resp=>{
        res.send(resp)
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})




router.get('/getinfo',authenticate.authenticate,(req,res,next)=>{

    userController.getinfo(req)

    .then(resp=>{
        res.send(resp)
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})




router.post('/editinfo',authenticate.authenticate,(req,res,next)=>{

    userController.editinfo(req)

    .then(resp=>{
        res.send(resp)
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})


router.get('/leaderboard',authenticate.authenticate,(req,res,next)=>{

    userController.leaderboard(req)

    .then(resp=>{
        res.send(resp)
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})


router.get('/test',authenticate.authenticate,(req,res,next)=>{

    userController.test(req)

    .then(resp=>{
        res.send(resp)
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})



















module.exports = router






