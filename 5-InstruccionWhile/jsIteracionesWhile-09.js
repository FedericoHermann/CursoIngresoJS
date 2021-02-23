/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	
	while(respuesta=="si") //Arranco el Loop 
	{
		numeroIngresado = prompt(`Ingrese un número:`); //pido valor
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero == "es el primero" || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if (banderaDelPrimero == "es el primero" || numeroIngresado < numeroMaximo)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "no es el primero";
		}
		respuesta=prompt("desea continuar?", "responda si/no");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN
*/

/*9 Bis  se pide el menor de los pares y el mayor de los negativos */
function mostrar()
{	
	// declarar variables
	let numeroIngresado;
	let negativo;
	let negativoMayor;
	let espar;
	let esparMenor;
	let banderaDelPrimeroPar;
	let banderaDelPrimeroNegativo;


	//iniciar variables
	banderaDelPrimeroPar= true;
	banderaDelPrimeroImpar= true;
	respuesta='si';
	
	while(respuesta=="si") //Arranco el Loop 
	{
		numeroIngresado = prompt(`Ingrese un número:`); //pido valor
		numeroIngresado = parseInt(numeroIngresado);  //parseo valor

		if (banderaDelPrimeroPar == true || numeroIngresado % 2 == 0 ) //evaluo condicion de par
 		{
			espar = numeroIngresado;

			banderaDelPrimeroPar == false;

			if (espar < esparMenor)
			{
				positivoMenor = positivo;	
			}
		}

		if (banderaDelPrimeroNegativo == true || numeroIngresado < 0) //evaluo condicion de negativo
		{
			negativo = numeroIngresado;

			banderaDelPrimeroNegativo == false;

			if (negativo > negativoMayor)
			{
				negativoMayor = negativo;	
			}
		}
		respuesta=prompt("desea continuar?", "responda si/no");
	}
	txtIdMaximo.value= "El máximo Negativo es "+ negativoMayor;
	txtIdMinimo.value= "El mínimo Positivo es "+ esparMenor;
 //me tira "undefined y no puedo encontrar la fala, lo subo para poder entregarlo y sigo avanzando hasta arreglarlo"

}//FIN DE LA FUNCIÓN