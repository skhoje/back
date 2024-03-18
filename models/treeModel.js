const mongoose = require("mongoose");
const treeModel = mongoose.Schema({
    type: {
        type: String,
        required: [true, "Type is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    parentId: {
        type: String,
        //required: [true, "Parent ID is required"]
    },

}, { timestamps: true })
module.exports = mongoose.model("tree", treeModel)