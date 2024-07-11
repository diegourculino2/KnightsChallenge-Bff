import axios from "axios";
import {gerarAtaque, gerarExperiencia} from "../controller/list-knights";
import {IKnightDTO, IKnightsResponse } from "../dto/knights-response";

export function getHeroes() {
    return axios({
        method: "get",
        url: "https://localhost:44312/Knights/filter=Hero"
    })
        .then((response) => {
            return (response as IKnightsResponse).data.map((rawKnight) => {
                return {
                    id: rawKnight.id,
                    name: rawKnight.name,
                    nickName: rawKnight.nickName,
                    birthday: rawKnight.birthday,
                    ataque: gerarAtaque(),
                    experiencia: gerarExperiencia()
                } as IKnightDTO;
            });
        }, (reason) => {
            return Promise.reject(reason);
        });
}
