import "@babel/polyfill";
import express from "express";
import loaders from "@/loader";

const app = express();

(async function startApp(app) {
	await loaders(app);
	app.listen(app.get("port"), () => {
		console.log("서버 작동 중");
		console.log(`http://127.0.0.1:${app.get("port")}`);
	});
})(app);
