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

	while(respuesta =="si")
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
			else
			{	if (numeroIngresado >0) 
				{
					sumaPositivos = sumaPositivos + numeroIngresado; //aumenta la suma de positivos
					contadorPositivos ++; //aumenta el contador de positivos
				}
				else
				{
					contadorCeros ++; //aumenta el contador de ceros
				}
			}

		respuesta=prompt("desea continuar?", "si/no");
		respuesta = respuesta.toLocaleLowerCase()

	}//fin del while

	//Calculamos promedios y diferencia, sorteamos el no ingreso de números de algún tipo
	if (contadorPositivos !=0 ) 
	{
		promedioPositivos = sumaPositivos / contadorPositivos;
	} 
	else 
	{
		promedioPositivos = "No se ingresaron números positivos";
	}
	
	if (promedioNegativos != 0 ) 
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
	} 
	else 
	{
		promedioNegativos = "No se ingresaron números negativos";
	}
	
	diferencia = sumaPositivos - sumaNegativos;

	//document Write
	document.write("La suma de Negativos es :"+sumaNegativos+"<br>");
	document.write("La suma de Positivos es :"+sumaPositivos+"<br>");
	document.write("La cantidad de negativos es :"+contadorNegativos+"<br>");
	document.write("La cantidad de positivos es :"+contadorPositivos+"<br>");
	document.write("La cantidad de ceros es :"+contadorCeros+"<br>");
	document.write("La cantidad de pares es :"+contadorPares+"<br>");
	document.write("El promedio de los positivos es :"+promedioPositivos+"<br>");
	document.write("El promedio de los negativos es :"+promedioNegativos+"<br>");
	document.write("La diferencia entre positivos y negativos es :"+diferencia+"<br>");
}//FIN DE LA FUNCIÓN