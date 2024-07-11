import * as express from "express";
import { knightDelete } from "../services/delete-knights-service";
import {knightsAll} from "../services/get-knights-service";
import {knightNew} from "../services/new-knights-service";

export const register = (app: express.Application) => {
    const cors = require("cors");
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.get("/knights", (req: express.Request, res: express.Response) => {
        knightsAll()
            .then((knights) => {
                res.header("Access-Control-Allow-Origin", "*");
                res.send(knights);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });

    app.post("/knights", (req: express.Request, res: express.Response) => {
        // tslint:disable-next-line:no-console
        console.log(req.body);
        knightNew(req.body)
            .then((knights) => {
                res.header("Access-Control-Allow-Origin", "*");
                res.send(knights);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });

    app.delete("/knights/:id", (req: express.Request, res: express.Response) => {
        knightDelete(req.params.id)
            .then((knights) => {
                res.header("Access-Control-Allow-Origin", "*");
                res.send(knights);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
};
