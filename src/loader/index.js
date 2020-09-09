import configs from "@/configs";

const loaders = (app) => {
	app.set("port", configs.PORT);
};

export default loaders;
