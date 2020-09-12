import bodyParser from "body-parser";
import { PORT } from "@/configs";
import router from "@/router";

const loaders = (app) => {
	app.set("port", PORT);
	app.use(bodyParser.json());
	app.use("/api", router);
};

export default loaders;
