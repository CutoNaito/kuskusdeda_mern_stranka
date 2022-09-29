import "dotenv/config";
import {testquery} from "./db.js";
import express from "express";
import mysql from "mysql2/promise";

const pool = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const routes = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});