import axios from "axios";

export function knightNew(req: any) {
    return axios({
        method: "post",
        data: req,
        url: "http://knights.challenge-api:8080/Knights/"
    })
        .then((response) => {
            return response.status;
        }, (reason) => {
            return Promise.reject(reason);
        });
}
