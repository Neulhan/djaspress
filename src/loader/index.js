import bodyParser from "body-parser";
import config from "@/configs";
import router from "@/router";

const loaders = (app) => {
	app.set("port", config.PORT);
	app.use(bodyParser.json());
	app.use("/api", router);
};

export default loaders;
