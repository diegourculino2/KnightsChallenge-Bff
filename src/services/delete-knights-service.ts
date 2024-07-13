import axios from "axios";

export function knightDelete(id: string) {
    const uri = "http://knights.challenge-api:8080/Knights/" + id;
    return axios({
        method: "delete",
        url: uri
    })
        .then((response) => {
            return response.status;
        }, (reason) => {
            return Promise.reject(reason);
        });
}
