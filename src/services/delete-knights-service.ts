import axios from "axios";

export function knightDelete(id: string) {
    const uri = "https://localhost:44312/Knights/" + id;
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
