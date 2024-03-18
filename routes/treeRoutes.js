const express = require('express')
const { getTree, setTree, deleteTree, updateChildrenTree } = require('../controllers/treeController')
const router = express.Router()


router.route("/getTree").get(getTree)
router.route("/setTree").post(setTree)
router.route("/deleteTree").post(deleteTree)

module.exports = router