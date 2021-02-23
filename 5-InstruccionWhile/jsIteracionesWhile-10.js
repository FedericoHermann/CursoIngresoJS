/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorNegativos;
	let contadorPositivos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;


	//Asigno valores iniciales
	respuesta="si";
	sumaNegativos=0;
	sumaPositivos=0;
	contadorNegativos=0;
	contadorPositivos=0;
	contadorCeros=0;
	contadorPares=0;


	while(respuesta=="si")
	{	
		numeroIngresado = prompt(`Ingrese un número:`); //pido valor
		numeroIngresado = parseInt(numeroIngresado);  //parseo valor

		if (numeroIngresado %2 == 0 ) 
		{
			contadorPares ++; //aumenta el contador de pares
		}

		if (numeroIngresado < 0 ) 
		{
			sumaNegativos = sumaNegativos + numeroIngresado; //aumenta la suma de negativos

			contadorNegativos ++; //aumenta el contador de negativos
		}

		if (numeroIngresado = 0 ) 
		{
			contadorCeros ++; //aumenta el contador de ceros
		}

		if (numeroIngresado > 0 ) 
		{
			sumaPositivos = sumaPositivos + numeroIngresado; //aumenta la suma de negativos

			contadorPositivos ++; //aumenta el contador de negativos
		}

		respuesta=prompt("desea continuar?", "si/no");
		respuesta = respuesta.toLocaleLowerCase()
		
	}//fin del while

	//Calculamos promedios y diferencia
	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferencia = sumaPositivos - sumaNegativos;


	document.write("la suma de Negativos es :"+sumaNegativos);
	document.write("la suma de Positivos es :"+sumaPositivos);
	document.write("la cantidad de negativos es :"+contadorNegativos);
	document.write("la cantidad de positivos es :"+contadorPositivos);
	document.write("la cantidad de ceros es :"+contadorCeros);
	document.write("la cantidad de pares es :"+contadorPares);
	document.write("el promedio de los positivos es :"+promedioPositivos);
	document.write("el promedio de los negativos es :"+promedioNegativos);
	document.write("la diferencia entre positivos y negativos es :"+diferencia);
}//FIN DE LA FUNCIÓN