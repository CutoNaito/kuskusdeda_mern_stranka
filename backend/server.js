import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

import objednavkaRoutes from "./routes/objednavkaRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import kuponyRoutes from "./routes/kuponyRoutes.js";
import zboziRoutes from "./routes/zboziRoutes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/objednavky', objednavkaRoutes);
app.use('/users', usersRoutes);
app.use('/kupony', kuponyRoutes);
app.use('/zbozi', zboziRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => console.log(`Listening on port ${port}!`));
    })
    .catch(err => console.log(err));