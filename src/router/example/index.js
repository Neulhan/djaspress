import express from "express";

const router = express.Router();

router.get("/ex-get", (req, res, next) => {
	res.send("get example");
});

router.post("/ex-post", (req, res, next) => {
	res.json(req.body);
});

router.get("/ex-get-param", (req, res, next) => {
	res.json(req.query);
});

router.get("/ex-get/:name", (req, res, next) => {
	res.json(req.params);
});

export default router;
