export interface IKnight {
    id: string;
    name: string;
    nickName: string;
    birthday: string;
    weapons: IWeapons[];
    attributes: IAttributes;
    keyAttribute: string;
}

export interface IWeapons {
    name: string;
    mod: number;
    attr: number;
    equipped: boolean;
  }

export interface IAttributes {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export interface IKnightsResponse {
    data: IKnight[];
}

export interface IKnightDTO {
    id: string;
    name: string;
    nickName: string;
    birthday: string;
    ataque: number;
    experiencia: number;
}
