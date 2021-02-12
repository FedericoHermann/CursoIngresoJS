function mostrar()
{
	//declaro variables
	let contador;
	let acumulador;
	let numeroIngresado;

	//asigno valores iniciales
	contador=0;
	acumulador=0; 

	//hago loop de conteo
	while (contador <5)
	{
		contador ++; //asigno posición de número

		numeroIngresado = prompt(`Ingrese su número nº${contador}`) //tomo valor del usuario

		numeroIngresado = parseFloat(numeroIngresado); //parseo el valor ingresado

		acumulador = acumulador + numeroIngresado; //sumo el valor ingresado a la variable "acumulador"
	}

	// suma de todos los número ingresados
	txtIdSuma.value=acumulador;

	//promedio de todos los números ingresados
	txtIdPromedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN