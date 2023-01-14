const express = require("express");
const router = express.Router();
const authMiddleWare = require("../middleware/session")
const checkRol = require("../middleware/rol")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")

router.get("/", authMiddleWare, getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", authMiddleWare, checkRol(["admin"]), validatorCreateItem, createItem);
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);


module.exports = router;