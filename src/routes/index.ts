import * as express from "express";
import {knightsAll} from "../services/get-knights-service";
import {knightNew} from "../services/new-knights-service";

export const register = (app: express.Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

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
        knightNew(req.body)
            .then((knights) => {
                res.header("Access-Control-Allow-Origin", "*");
                res.send(knights);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
};
