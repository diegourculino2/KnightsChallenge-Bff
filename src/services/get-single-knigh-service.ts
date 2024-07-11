import axios from "axios";
import {gerarAtaque, gerarExperiencia} from "../controller/list-knights";
import {IKnightDTO } from "../dto/knights-response";

export function knightSingleGet(id: string) {
    const uri = "https://localhost:44312/Knights/" + id;
    return axios({
        method: "get",
        url: uri
    })
        .then((response) => {
                const rawKnight = response.data;
                return {
                    id: rawKnight.id,
                    name: rawKnight.name,
                    nickName: rawKnight.nickname,
                    birthday: rawKnight.birthday,
                    ataque: gerarAtaque(),
                    experiencia: gerarExperiencia()
                } as IKnightDTO;
        }, (reason) => {
            return Promise.reject(reason);
        });
}
