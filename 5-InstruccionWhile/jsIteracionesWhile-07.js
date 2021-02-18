/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{

	//Declaracion de variables
	let contador;
	let acumulador;
	let numero;
	let respuesta;

	//asigno valores iniciales
	contador = 0;
	acumulador = 0;
	respuesta = "si";


	//hago loop de conteo
	while (respuesta == "si")
	{
		if (respuesta == "si")
		{
			contador ++; //asigno posición de número

			numero = prompt(`Ingrese su número nº${contador}`) //tomo valor del usuario

			numero = parseFloat(numero); //parseo el valor ingresado
	
			acumulador = acumulador + numero; //sumo el valor ingresado a la variable "acumulador"

			respuesta = prompt(`¿Desea sumar otro número?`, `ingrese " si ", para seguir operando`);

		}
	}

	// Se publican en la caja de texto los datos
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN