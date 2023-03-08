const mongoose = require('mongoose')
const Schema = mongoose.Schema
const  { ObjectId } = Schema

const activitySchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    date:{type:Date},

    day:{type:String},

    activity:{

        date:{
            type:Date
        },
        water:{
            type:Number,
            default:0
        },
        exercise:{
            type:Number,
            default:0
        },
        meditation:{
            type:Number,
            default:0
        },
        mood:{
            type:Number,
            default:2
        }
    }

},{timestamps:true})

module.exports = mongoose.model('activity',activitySchema)

