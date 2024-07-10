export interface IKnight {
    name: string;
    nickName: string;
    birthday: string;
}

export interface IKnightsResponse {
    data: IKnight[];
}

export interface IKnightDTO {
    name: string;
    nickName: string;
    birthday: string;
    ataque: string;
    experiencia: string;
}
