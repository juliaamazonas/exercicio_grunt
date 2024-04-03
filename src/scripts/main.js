function NumeroAleatorio () {
    let numeroAleatorio = Math.random();
    numeroAleatorio = numeroAleatorio *100;
    numeroAleatorio = Math.round(numeroAleatorio);
    return numeroAleatorio;
}

let numero = NumeroAleatorio();
console.log(numero);