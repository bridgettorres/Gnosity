const mongoose = require('mongoose')
const quest = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
    description: { type: String, required: true },
    tags: { type: String, default: [] },
    difficulty: { type: String, enum: ['Easy', "Medium", "Hard", "Insane"], required: true },
    tokenValues: { type: String, default: [] },
    exp: { type: Number, default: 0 },
    status: { type: String, enum: ['active', 'completed', 'deleted'], default: 'active' },

});

module.exports = mongoose.model('Quest', quest);