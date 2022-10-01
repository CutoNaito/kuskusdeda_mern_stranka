import express from "express";
const router = express.Router();
import defaultExport from "../dao/zboziDAO.js";

router.get("/zbozi/", defaultExport.getZbozi);
router.get("/zbozi/:id", defaultExport.getZboziById);
router.post("/zbozi/", defaultExport.createZbozi);
router.patch("/zbozi/:id", defaultExport.updateZbozi);
router.delete("/zbozi/:id", defaultExport.deleteZbozi);

export default router;