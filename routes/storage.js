const uploadMiddleware = require("../utils/handleStorage")
const express = require("express")
const router = express.Router();
const {getItems, getItem, updateItem, deleteItem, createItem} = require("../controllers/storage")
const {validatorGetItem} = require("../validators/storage")

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.delete("/:id", validatorGetItem, deleteItem);
router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;