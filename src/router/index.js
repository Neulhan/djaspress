import express from "express";
import example from "./example";

const router = express.Router();

router.use("/v1", example);

export default router;
