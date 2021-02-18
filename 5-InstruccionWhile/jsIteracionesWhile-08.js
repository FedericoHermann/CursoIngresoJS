/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//declaro variables

	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numero;

	//asigno valores iniciales

	contador=0; //inicio el contador en cero

	sumaPositivos=0; //Inicio el acumulador de suma de positivos

	multiplicacionNegativos=1; //inicio el acumulador de producto de negativos

	respuesta='si'; //inicio la respuesta para validar el loop inicial

	//hago loop de conteo
	while (respuesta == "si")
	{
		if (respuesta == "si")
		{
			contador ++; //asigno posición de número

			numero = prompt(`Ingrese su número nº${contador}`) //tomo valor del usuario

			numero = parseFloat(numero); //parseo el valor ingresado

			if (numero > 0) 
			{
				sumaPositivos = sumaPositivos + numero; //sumo los valores positivos
			} 
			else 
			{
				multiplicacionNegativos = multiplicacionNegativos * numero; // multiplico negativos
			}

			respuesta = prompt(`¿Desea sumar otro número?`, `ingrese " si ", para seguir operando`);

		}
	}

	// Se publican en la caja de texto los datos

	txtIdSuma.value= "La suma de los num. positivos es. " + sumaPositivos;
	txtIdProducto.value= "El producto de los num. negativos es: " + multiplicacionNegativos;

}//FIN DE LA FUNCIÓN