const userSchema = require('../models/userModel')
const activitySchema = require('../models/activityModel')
const badgeSchema = require('../models/badgeModel')
const cron = require('node-cron')
const moment = require('moment')
const jwt = require('jsonwebtoken')




class userController {

    static async scheduler() {

        try {
     

        cron.schedule('0 0 * * *', async () => {
               
                let d = new Date()
                let day = d.getDay()


                let obj = {
                    0: "Sunday",
                    1: "Monday",
                    2: "Tuesday",
                    3: "Wednesday",
                    4: "Thursday",
                    5: "Friday",
                    6: "Saturday",
                }


                const users = await userSchema.find()

                if(users){

                    const currdate = moment().format('YYYY-MM-DD')
                    const currentDate = new Date(currdate)

                for (let i = 0; i < users.length; i++) {

                    const useremail = users[i].email
                    console.log(useremail)
                    const addactivity = await new activitySchema()
                    addactivity.email = useremail
                    
                    addactivity.date = currentDate
                    addactivity.day = obj[day]
                    addactivity.activity = {
                        date: moment(),
                        water: 0,
                        exercise: 0,
                        meditation: 0,
                        mood: 2

                    }

                    const val = await addactivity.save()
                    console.log("Done")

                }

            }

            })

        } catch (err) {
            console.log(err)
        }







    }



    async saveUser(req) {

        try {

            if (req.body.email) {
                const userExist = await userSchema.findOne({ email: req.body.email })
                let obj = {
                    0: "Sunday",
                    1: "Monday",
                    2: "Tuesday",
                    3: "Wednesday",
                    4: "Thursday",
                    5: "Friday",
                    6: "Saturday",
                }

                let d = new Date()
                let day = d.getDay()

                if (userExist == null) {

                    const newuser = await new userSchema()
                    newuser.name = req.body.name
                    newuser.email = req.body.email
                    newuser.picture = req.body.picture
                    const info = await newuser.save()



                    const token = await jwt.sign({ uid: info._id }, "jwtkey")

                    const addactivity = await new activitySchema()
                    addactivity.email = req.body.email
                    addactivity.date = moment()
                    addactivity.day = obj[day]
                    addactivity.activity = {
                        date: moment(),
                        water: 0,
                        exercise: 0,
                        meditation: 0,
                        mood: 2



                    }
                    const val = await addactivity.save()

                    return {
                        status: 201,
                        data: info,
                        token: token,
                        message: "Saved successfully"
                    }

                }
                else if (userExist) {
                    const token = await jwt.sign({ uid: userExist._id }, "jwtkey")

                    return {
                        status: 200,
                        data: userExist,
                        token: token

                    }
                }
            }

        } catch (err) {
            return {
                status: 400,
                message: err.message

            }
        }
    }




    async weeklyactivity(req) {



        try {


            const user = await userSchema.findOne({ _id: req.userid })
            if (user) {
                let emailId = user.email
                let date = moment()
                let start = moment().startOf('isoweek')
                let end = moment().endOf('isoweek')

                console.log(start)


                const activity = await activitySchema.find({
                    date: {
                        $gte: start,
                        $lte: end
                    }, email: emailId
                })


                return {
                    status: 200,
                    data: activity,
                }
            }
            else {
                return {
                    status: 400,
                    message: "No data found"
                }

            }
        } catch (err) {

            return {
                status: 400,
                message: err.message
            }
        }
    }


    async monthlyactivity(req) {


        try {


            const user = await userSchema.findOne({ _id: req.userid })
            if (user) {
                let emailId = user.email
                let date = moment()
                let start = moment().startOf('month')
                let end = moment().endOf('month')

                const activity = await activitySchema.find({
                    date: {
                        $gte: start,
                        $lte: end
                    }, email: emailId
                })


                return {
                    status: 200,
                    data: activity,
                }
            }
            else {
                return {
                    status: 400,
                    message: "No data found"
                }

            }
        } catch (err) {

            return {
                status: 400,
                message: err.message
            }
        }
    }


    async getbadges(req) {

        try {

            const user = await userSchema.findOne({ _id: req.userid })
            if (user) {
                let emailId = user.email
                console.log(emailId)
                let date = moment()
                let start = moment().startOf('month')
                let end = moment().endOf('month')
                const month = moment().format('MMMM')

                const activity = await activitySchema.find({
                    date: {
                        $gte: start,
                        $lte: end
                    }, email: emailId
                })

                let watercount = 0
                let meditationcount = 0
                let exercisecount = 0
                let moodcount = 0
                console.log(activity[0].activity.water)

                for (let i = 0; i < activity.length; i++) {

                    watercount = watercount + activity[i].activity.water
                    meditationcount = meditationcount + activity[i].activity.meditation
                    exercisecount = exercisecount + activity[i].activity.exercise
                    if (activity[i].activity.mood == 3) {
                        moodcount = moodcount + 1

                    }
                }

                console.log(req.query.stepsCount, req.query.heartPoints, req.query.caloriesBurned)

                const finduser = await badgeSchema.findOne({ email: emailId, month: month })


                if (finduser == null) {

                    let badgecount = 0

                    const adduser = await new badgeSchema()
                    adduser.email = emailId
                    adduser.month = month
                    if (watercount >= 240) {

                        adduser.waterBadge = true
                    }
                    if (meditationcount >= 27000) {


                        adduser.meditationBadge = true
                    }
                    if (exercisecount >= 108000) {

                        adduser.exerciseBadge = true
                    }
                    if (moodcount >= 15) {

                        adduser.moodBadge = true
                    }
                    if (req.query.stepsCount >= 150000) {
                        adduser.stepsBadge = true
                    }
                    if (req.query.heartPoints >= 450) {
                        adduser.heartBadge = true
                    }
                    if (req.query.caloriesBurned >= 60000) {
                        adduser.caloriesBadge = true
                    }




                    await adduser.save()

                }



                if (finduser) {


                    if (watercount >= 240) {

                        const updatewater = await badgeSchema.updateOne({ email: emailId, month: month }, { waterBadge: true })
                    }

                    if (meditationcount >= 27000) {
                        const updatemeditation = await badgeSchema.updateOne({ email: emailId, month: month }, { meditationBadge: true })
                    }

                    if (exercisecount >= 108000) {
                        const updateexercise = await badgeSchema.updateOne({ email: emailId, month: month }, { exerciseBadge: true })

                    }
                    if (moodcount >= 15) {
                        const moodupdate = await badgeSchema.updateOne({ email: emailId, month: month }, { moodBadge: true })
                    }

                    if (req.query.stepsCount >= 150000) {

                        const stepsupdate = await badgeSchema.updateOne({ email: emailId, month: month }, { stepsBadge: true })
                    }

                    if (req.query.heartPoints >= 450) {

                        const heartupdate = await badgeSchema.updateOne({ email: emailId, month: month }, { heartBadge: true })
                    }


                    if (req.query.caloriesBurned >= 60000) {

                        const caloriesupdate = await badgeSchema.updateOne({ email: emailId, month: month }, { caloriesBadge: true })
                    }

                }

                const allbadges = await badgeSchema.find({ email: emailId })
                console.log(allbadges)

                return {
                    status: 200,
                    data: allbadges
                }
            }
        }

        catch (err) {

            return {
                status: 400,
                message: err.message

            }
        }
    }


    async addwater(req) {

        try {

            const userExists = await userSchema.findOne({ _id: req.userid })

            const emailId = userExists.email
            console.log(emailId)

            const currdate = moment().format('YYYY-MM-DD')

            const date = new Date(currdate)



            const activity = await activitySchema.findOne({
                email: emailId, date: {
                    $gte: date
                }
            })

            console.log(activity);


            let intial = activity.activity.water
            let final = intial + req.body.water
            let exercise = activity.activity.exercise
            let meditation = activity.activity.meditation
            let mood = activity.activity.mood

            const updateactivity = await activitySchema.updateOne({
                email: emailId, date: {
                    $gte: date
                }
            }, { activity: { water: final, exercise: exercise, meditation: meditation, mood: mood } })


            const newactivity = await activitySchema.findOne({
                email: emailId, date: {
                    $gte: date
                }
            })

            return {

                status: 200,
                data: newactivity
            }

        } catch (err) {
            return {
                status: 400,
                message: err.message
            }
        }
    }


    async addexercise(req) {

        try {

            const userExists = await userSchema.findOne({ _id: req.userid })


            const emailId = userExists.email

            const currdate = moment().format('YYYY-MM-DD')

            const date = new Date(currdate)


            const activity = await activitySchema.findOne({
                email: emailId, date: {
                    $gte: date
                }
            })

            console.log(activity)

            let intial = activity.activity.exercise
            let final = intial + req.body.exercise
            let water = activity.activity.water
            let meditation = activity.activity.meditation
            let mood = activity.activity.mood

            const updateactivity = await activitySchema.updateOne({
                email: emailId, date: {
                    $gte: date
                }
            }, { activity: { water: water, exercise: final, meditation: meditation, mood: mood } })

            const newactivity = await activitySchema.findOne({
                email: emailId, date: {
                    $gte: date
                }
            })
            return {

                status: 200,
                data: newactivity
            }

        } catch (err) {

            return {
                status: 400,
                message: err.message
            }
        }
    }




    async addmeditaton(req) {


        try {

            const userExists = await userSchema.findOne({ _id: req.userid })
            console.log(userExists)

            const emailId = userExists.email

            const currdate = moment().format('YYYY-MM-DD')

            const date = new Date(currdate)


            const activity = await activitySchema.findOne({
                email: emailId, date: {
                    $gte: date
                }
            })

            let intial = activity.activity.meditation
            let final = intial + req.body.meditation
            let water = activity.activity.water
            let exercise = activity.activity.exercise
            let mood = activity.activity.mood

            const updateactivity = await activitySchema.updateOne({
                email: emailId, date: {
                    $gte: date
                }
            }, { activity: { water: water, exercise: exercise, meditation: final, mood: mood } })

            const newactivity = await activitySchema.findOne({
                email: emailId, date: {
                    $gte: date
                }
            })
            return {

                status: 200,
                data: newactivity
            }

        } catch (err) {

            return {
                status: 400,
                message: err.message
            }
        }

    }


    async addmood(req) {


        try {

            const userExists = await userSchema.findOne({ _id: req.userid })
            console.log(userExists)

            const emailId = userExists.email
            const currdate = moment().format('YYYY-MM-DD')

            const date = new Date(currdate)


            const activity = await activitySchema.findOne({
                email: emailId, date: {
                    $gte: date
                }
            })


            let final = req.body.mood
            let water = activity.activity.water
            let exercise = activity.activity.exercise
            let meditation = activity.activity.meditation

            const updateactivity = await activitySchema.updateOne({
                email: emailId, date: {
                    $gte: date
                }
            }, { activity: { water: water, exercise: exercise, meditation: meditation, mood: +final } })

            const newactivity = await activitySchema.findOne({
                email: emailId, date: {
                    $gte: date
                }
            })
            return {

                status: 200,
                data: newactivity
            }

        } catch (err) {

            return {
                status: 400,
                message: err.message
            }
        }

    }


    async getinfo(req) {


        try {



            const finduser = await userSchema.findOne({ _id: req.userid })

            if (finduser) {


                return {
                    status: 200,
                    data: finduser
                }

            }

            else {


                return {
                    status: 400,
                    message: "User Not found"
                }


            }

        } catch (err) {

            return {


                status: 400,
                message: err.message
            }



        }






    }

    async editinfo(req) {


        try {
            
            const userExists = await userSchema.updateOne({ _id: req.userid }, { waterGoal: req.body.waterGoal, meditationGoal: req.body.meditationGoal, exerciseGoal: req.body.exerciseGoal })
            console.log(userExists)

            const finduser = await userSchema.findOne({ _id: req.userid })

            if (finduser) {
                return {
                    status: 200,
                    data: finduser
                }
            }
            else {
                return {
                    status: 400,
                    message: "No user found"
                }
            }




        } catch (err) {
            console.log(err)
        }

    }


    async leaderboard(req) {

        const currentMonth = moment().format('MMMM');

        const start = moment().startOf('month')
        const end = moment().endOf('month')

        const data = await badgeSchema.find({
            month: currentMonth
        })


        const finduser = await userSchema.findOne({ _id: req.userid })

        console.log("User", finduser.email)

        let emailId = finduser.email
        let split = emailId.split("@")[1]


        let arr = []

        for (let i = 0; i < data.length; i++) {
            let count = 0

            let obj = {}


            if (data[i].waterBadge == true) {
                count++
            }

            if (data[i].exerciseBadge == true) {
                count++
            }

            if (data[i].exerciseBadge == true) {
                count++
            }

            if (data[i].meditationBadge == true) {
                count++
            }

            if (data[i].stepsBadge == true) {
                count++
            }

            if (data[i].heartBadge == true) {
                count++
            }

            if (data[i].moodBadge == true) {
                count++
            }

            if (data[i].caloriesBadge == true) {
                count++
            }



            const user = await userSchema.findOne({ email: data[i].email }, { name: 1 })
            console.log(user.name)

            obj.name = user.name
            obj.badgecount = count
            console.log(obj)
            arr.push(obj)

        }


        return {
            status: 200,
            data: arr
        }



    }





    async test(req) {

        console.log(req.query)
    }


}

userController.scheduler()

module.exports = new userController()
