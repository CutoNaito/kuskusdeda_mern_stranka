import express from "express";
const router = express.Router();
import defaultExport from "../dao/kuponyDAO.js";

router.get("/kupony/", defaultExport.getKupony);
router.get("/kupony/:id", defaultExport.getKupon);
router.post("/kupony/", defaultExport.createKupon);
router.patch("/kupony/:id", defaultExport.updateKupon);
router.delete("/kupony/:id", defaultExport.deleteKupon);

export default router;