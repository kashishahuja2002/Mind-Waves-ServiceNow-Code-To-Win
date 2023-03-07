const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = Schema

const userSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String
    },
    authCode: {
        type: String
    },
    waterGoal: {
        type: Number,
        default: 8,
    },
    meditationGoal: {
        type: Number,
        default: 900
    },
    exerciseGoal: {
        type: Number,
        default: 3600
    },
 

}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)


