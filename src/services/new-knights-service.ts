import axios from "axios";
import {gerarAtaque, gerarExperiencia} from "../controller/list-knights";
import { IKnight, IKnightDTO, IKnightsResponse } from "../dto/knights-response";

export function knightNew(req: any) {
    return axios({
        method: "post",
        data: req,
        url: "https://localhost:44312/Knights"
    })
        .then((response) => {
            return response.status;
        }, (reason) => {
            return Promise.reject(reason);
        });
}
