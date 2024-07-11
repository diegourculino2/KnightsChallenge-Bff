import axios from "axios";

export function knightSet(id: string, req: any) {
    const uri = "https://localhost:44312/Knights/" + id;
    return axios({
        method: "put",
        data: req,
        url: uri
    })
        .then((response) => {
            return response.status;
        }, (reason) => {
            return Promise.reject(reason);
        });
}
