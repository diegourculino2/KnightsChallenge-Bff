import axios from "axios";
import {gerarAtaqueNovo, gerarExperiencia, gerarIdade} from "../controller/list-knights";
import {IKnightDTO, IKnightsResponse } from "../dto/knights-response";

export function knightsAll() {
    return axios({
        method: "get",
        url: "http://knights.challenge-api:8080/Knights/"
    })
        .then((response) => {
            // tslint:disable-next-line:no-console
            console.log("then 2");
            if (response.data) {
                return (response as IKnightsResponse).data?.map((rawKnight) => {
                    return {
                        id: rawKnight.id,
                        name: rawKnight.name,
                        nickName: rawKnight.nickName,
                        birthday: gerarIdade(rawKnight.birthday),
                        ataque: gerarAtaqueNovo(rawKnight.keyAttribute,  rawKnight.attributes, rawKnight.weapons),
                        experiencia: gerarExperiencia(rawKnight.birthday),
                        armas: rawKnight.weapons.length,
                        attributes: rawKnight.attributes,
                        weapons: rawKnight.weapons,
                        keyAttribute: rawKnight.keyAttribute
                    } as IKnightDTO;
                });
            }
        }, (reason) => {
            // tslint:disable-next-line:no-console
            console.log("reason 2");

            // tslint:disable-next-line:no-console
            console.log(reason);
            return Promise.reject(reason);
        });
}
