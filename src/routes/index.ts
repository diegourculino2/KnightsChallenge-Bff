import * as express from "express";
import {knightsAll} from "../services/knights-service";

export const register = (app: express.Application) => {
    app.get("/knights", (req: express.Request, res: express.Response) => {
        knightsAll()
            .then((knights) => {
                res.send(knights);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
};
