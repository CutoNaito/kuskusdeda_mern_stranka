import express from "express";

const router = express.Router();
const {
    selectusers,
    selectproducts,
    selectorders
} = require('./db');

router.get('/users', selectusers);
router.get('/products', selectproducts);
router.get('/orders', selectorders);

module.exports = router;