export enum Color { //enum para manejar valores numéricos con palabras
    rojo, negro, azul, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;

}