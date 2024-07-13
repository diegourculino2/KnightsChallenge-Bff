import { IAttributes, IWeapons } from "../dto/knights-response";

export function gerarIdade(birthday: string) {

    const hoje = new Date();
    const newBirthday = new Date(birthday).toISOString().replace(/T/, " ").replace(/\..+/, "");
    const nascimento = new Date(newBirthday);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    if ( new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
         new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()) ) {
         idade--;
    }

    return idade.toString();
}

export function gerarAtaque() {

    return 0;
}

export function gerarAtaqueNovo(keyAttribute: string , atributos: IAttributes, armas: IWeapons[]) {

    const attrSelecionado = filtrarAttr(keyAttribute, atributos);

    const armasEquipadas = filtrarArmas(armas);

    const ataque = 10 + gerarMod(attrSelecionado) + gerarMod(armasEquipadas);
    return ataque;
}

export function gerarExperiencia(idade: string) {

    const calcularIdade = gerarIdade(idade);

    const idadeNumber = parseInt(calcularIdade, 10);
    if (idadeNumber <= 7) {
        return 0;
    }
    const experiencia = Math.floor(idadeNumber) *  Math.pow(22, 1.45);

    return experiencia;
}

function filtrarAttr(atributoSelecionado: string, atributos: any) {

    return atributos[atributoSelecionado];
}

function filtrarArmas(armas: IWeapons[]) {

    const armasEquipadas = armas.filter((arma) => arma.equipped);
    const modificadorTotal = armasEquipadas.reduce((total, arma) => total + arma.mod, 0);

    return modificadorTotal;

}

function gerarMod(mod: number) {
    if (mod >= 0 && mod <= 8) { return -2; }
    if (mod >= 9 && mod <= 10) { return -1; }
    if (mod >= 11 && mod <= 12) { return 0; }
    if (mod >= 13 && mod <= 15) { return 1; }
    if (mod >= 16 && mod <= 18) { return 2; }
    if (mod >= 19 && mod <= 20) { return 3; }
    return 0;
}
