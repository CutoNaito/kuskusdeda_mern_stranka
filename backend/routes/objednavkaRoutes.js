import express from "express";
const router = express.Router();
import defaultExport from "../dao/objednavkaDAO.js";

router.get("/objednavky/", defaultExport.getObjednavky);
router.get("/objednavky/:id", defaultExport.getObjednavka);
router.post("/objednavky/", defaultExport.createObjednavka);
router.patch("/objednavky/:id", defaultExport.updateObjednavka);
router.delete("/objednavky/:id", defaultExport.deleteObjednavka);

export default router;