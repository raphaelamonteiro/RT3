import { Somador, Subtrator } from "modulo-rt3";

const somador = new Somador();
const subtrator = new Subtrator();

console.log("Soma:", somador.calcular(10, 5));
console.log("Subtração:", subtrator.calcular(10, 5));
