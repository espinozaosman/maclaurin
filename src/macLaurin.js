// Funcion para calcular el factorial de un numero
let factorial = n => {
    return n ? n*factorial(n-1) : 1;
};


/*funcion para hallar el valor de la serie de maclaurin de cos x en radianes
n es el valor inicial, e inicio es el exponente y base factorial en el primer elemento*/

export const serie = (x, n, inicio) => {
	const iteraciones = 20; 
	let multiplicador = 1;
	let i = inicio;
    let datos = [];
	while(i < inicio + iteraciones) {
		multiplicador *= -1; // alterna entre suma y resta segun explica la serie
		const sigElem = (x**i) / factorial(i); // cada elemenento es (x^i) / i!
		n += multiplicador * sigElem // suma o resta del resultado final
		i += 2 // incrementa a i en 2 unidades
        datos.push(n); //creamos el array de datos para poder formar la grafica
	}
	return datos;
}


// coseno de x en radianes
export const cos = (x) => {
	return serie(x, 1, 2);
}



