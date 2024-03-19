const treeModel = require("../models/treeModel");

exports.setTree = async (req, res) => {
    try {
        let data = req.body;
        if (!data.type || !data.name) {
            return res.status(400).json({
                status: "failure",
                message: "Type and name are required"
            });
        }
        let tree = await treeModel.create(data);
        return res.status(200).json({
            status: "success",
            message: "Data saved successfully",
            data: tree
        });
    } catch (error) {
        console.error("Error saving tree data:", error);
        return res.status(500).json({
            status: "failure",
            message: "Error saving tree data",
            error: error.message
        });
    }
};

exports.getTree = async (req, res) => {
    try {
        let tree = await treeModel.find();
        return res.status(200).json({
            status: "success",
            message: "Data fetched successfully",
            data: tree
        });
    } catch (error) {
        console.error("Error fetching tree data:", error);
        return res.status(500).json({
            status: "failure",
            message: "Error fetching tree data",
            error: error.message
        });
    }
};

exports.deleteTree = async (req, res) => {
    try {
        let data = req.body;
        if (!data._id) {
            return res.status(400).json({
                status: "failure",
                message: "Id is missing"
            });
        }
        let item = await treeModel.findOne({ _id: data._id });
        let deletedSubItems;
        if (item.type === "folder") {
            deletedSubItems = await treeModel.deleteMany({ parentId: data._id });
        }
        let deletedItem = await treeModel.deleteOne({ _id: data._id });
        return res.status(200).json({
            status: "success",
            message: "Data deleted successfully",
            deletedItem,
            deletedSubItems
        });
    } catch (error) {
        console.error("Error deleting tree data:", error);
        return res.status(500).json({
            status: "failure",
            message: "Error deleting tree data",
            error: error.message
        });
    }
};
