import dotenv from "dotenv";
import express from "express";
import * as routes from "./routes";

dotenv.config();

const port = 3000;
const app = express();

routes.register(app);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});
