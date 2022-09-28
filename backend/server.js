import "dotenv/config";
import {testquery} from "./db.js";
import express from "express";
import mysql from "mysql2/promise";

const pool = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kuskusdeda'
});

const app = express();
const port = process.env.PORT;

app.get('/', async (req, res) => {
    const [rows] = await testquery(pool);
    res.json(rows);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});