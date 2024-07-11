import axios from "axios";

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
