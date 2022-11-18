import express from "express";
const router = express.Router();
import defaultExport from "../dao/usersDAO.js";

router.get("/users/", defaultExport.getUsers);
router.get("/users/:username", defaultExport.getUser);
router.post("/users/", defaultExport.createUser);
router.patch("/users/:id", defaultExport.updateUser);
router.delete("/users/:id", defaultExport.deleteUser);
router.get("/users/token/:token", defaultExport.getUsersByToken);

export default router;