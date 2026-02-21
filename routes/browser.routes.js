import express from "express";
import {
  launchBrowser,
  getSession,
  closeSession
} from "../controllers/browser.controller.js";

const router = express.Router();

router.post("/launch", launchBrowser);
router.get("/:id", getSession);
router.delete("/:id", closeSession);

export default router;
