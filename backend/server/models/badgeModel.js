const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = Schema

const badgeSchema = new mongoose.Schema({

    email: {
        type: String,
    },
    month: { 
        type: String ,
    
    },
    waterBadge: {
        type: Boolean,
        default: false
    },
    exerciseBadge: {
        type: Boolean,
        default: false
    },
    meditationBadge: {
        type: Boolean,
        default: false

    },
    moodBadge:{
        type:Boolean,
        default:false
    },
   
    stepsBadge:{
        type:Boolean,
        default:false
    },
    caloriesBadge:{
        type:Boolean,
        default:false
    },
    heartBadge:{
        type:Boolean,
        default:false
    }


}, { timestamps: true })

module.exports = mongoose.model('badge',badgeSchema)
