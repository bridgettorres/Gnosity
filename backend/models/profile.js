const mongoose = require('mongoose')
const profile = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    email: { type: String },
    username: { type: String },
    level: { type: Number },
    tokenBalance: { type: String },
    creativityStat: { type: Number },
    healthStat: { type: Number },
    knowledgeStat: { type: Number },
    productivityStat: { type: Number }
});

module.exports = mongoose.model('Profile', profile);