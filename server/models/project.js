//model
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const projectSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type_project: {
        type: String,
        required: true,
        trim: true,
    },
    total_cost: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;