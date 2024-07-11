export interface IKnight {
    id: string;
    name: string;
    nickName: string;
    birthday: string;
    weapons: IWeapons[];
}

export interface IWeapons {
    name: string;
    mod: number;
    attr: number;
    equipped: boolean;
  }

export interface IKnightsResponse {
    data: IKnight[];
}

export interface IKnightDTO {
    id: string;
    name: string;
    nickName: string;
    birthday: string;
    ataque: string;
    experiencia: string;
}
