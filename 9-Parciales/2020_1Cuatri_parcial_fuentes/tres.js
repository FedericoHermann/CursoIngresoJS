/* parcial 2020
Ejercicio 03
Hermann Federico */

function mostrar()
{
	//declaro variables
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let temperaturaMayor;
	let personaTemperatura;
	let respuesta;
	let contadorHombresSolteros;
	let acumuladorEdadSolteros;
	let promedioEdadSolteros;
	let contadorHombresViudos;
	let contadorViudosMayores;
	let contadorMayoresTemperatura;


	//valores iniciales
	respuesta = "si";
	contadorHombresSolteros = 0;
	acumuladorEdadSolteros = 0;
	contadorHombresViudos = 0;
	contadorViudosMayores = 0;
	temperaturaMayor = 0;
	contadorMayoresTemperatura = 0;



	//valido datos y opero loop

	while (respuesta == "si") 
	{
		nombre = prompt(`Ingrese su nombre`); // Solicito nombre
		nombre = nombre.toLowerCase();

		while ( isNaN(nombre) == false ) 
		{
			nombre = prompt(`Error de Ingreso, Reingrese su nombre`); // Solicito nombre nuevamente.
			nombre = nombre.toLowerCase();
		}

		edad = prompt(`Ingrese su edad:`, `ej: 40`); // Solicito edad
		edad = parseInt(edad);

		while ( isNaN(edad) == true ) 
		{
			edad = prompt(`Error de Ingreso, Reingrese su edad:`, `ej: 40`); // Solicito edad
			edad = parseInt(edad);
		}

		sexo = prompt(`Ingrese su sexo:`, `f/m`); // Solicito sexo
		sexo = sexo.toLowerCase();

		while ( isNaN(sexo) == false ) 
		{
			sexo = prompt(`Error de Ingreso, Reingrese su sexo:`, `f/m`); // Solicito sexo
			sexo = sexo.toLowerCase();
		}

		estadoCivil = prompt(`Ingrese el estado civil`, "soltero/a - casado/a - separado/a - viudo/a"); //Solicito estado civil
		estadoCivil = estadoCivil.toLowerCase();

		while ( isNaN(estadoCivil) == false || estadoCivil !="soltero" && estadoCivil !="soltera" && estadoCivil !="casado" && estadoCivil !="casada" && estadoCivil !="separado" && estadoCivil !="separada" && estadoCivil !="viudo" && estadoCivil !="viuda" ) 
		{
			estadoCivil = prompt(`Error de ingreso, Reingrese el estado civil:`, "soltero/a - casado/a - separado/a - viudo/a"); //Solicito estado civil
		}

		temperatura = prompt(`Ingrese la temperatura`, `ej: 36.7`); //solicito cantidad de productos
		temperatura = parseFloat(temperatura);

		while ( isNaN(temperatura) == true || temperatura < 30 || temperatura > 50)
		{
			temperatura = prompt(`Error de Ingreso, reingrese la temperatura`, `ej: 36.7`); //solicito cantidad de productos
			temperatura = parseFloat(temperatura);
		}

		switch (estadoCivil) 
		{
			case "viudo":
			case "viuda":
				if (edad > 60) // calculo las personas mayores
				{
					contadorViudosMayores ++;
				}
				
				if (sexo = "m") 
				{
					contadorHombresViudos ++; //cuento los hombres viudos
				}
				break;

			case "soltero":
				contadorHombresSolteros ++; //cuento los hombres solteros
				acumuladorEdadSolteros = acumuladorEdadSolteros + edad; //acumulo la edad para obtener luego un promedio
				break;
		}

		if (temperatura > temperaturaMayor) //busco el nombre de la persona con mayor temperatura
		{
			temperaturaMayor = temperatura;
			personaTemperatura = nombre;
		}

		if (edad > 60 && temperatura > 38 ) //cuento los mayores de edad con temperatura superior a 38º
		{
			contadorMayoresTemperatura ++;
		}

		respuesta = prompt("¿Desea Ingresar otro Pasajero?", "si/no");
		respuesta = respuesta.toLowerCase();

		while ( respuesta != "si" && respuesta != "no" ) 
		{
			respuesta = prompt("Error, ¿Desea Ingresar otro Pasajero?", "si/no"); // Solicito respuesta nuevamente.
			respuesta = respuesta.toLowerCase();
		}

	}// fin del while

	// opero con el grupo de datos.

	//a) El nombre de la persona con mas temperatura.
	alert(`La persona con temperatura más elevada es "${personaTemperatura}" con "${temperaturaMayor}"`);

	//b) Cuantos mayores de edad estan viudos
	alert(`la cantidad de adultos mayores viudos es de "${contadorViudosMayores}"`);

	//c) La cantidad de hombres que hay solteros o viudos.
	alert(`La cantidad de Hombres Solteros es de "${contadorHombresSolteros}"`);
	alert(`La cantidad de Hombres Viudos es de "${contadorHombresViudos}"`);

	//cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	alert(`La cantidad de personas mayores, con temperatura superior a 38º es de "${contadorMayoresTemperatura}"`);

	//e) El promedio de edad entre los hombres solteros.
	promedioEdadSolteros = acumuladorEdadSolteros / contadorHombresSolteros;
	alert(`El promedio de edad de los hombres solteros es de "${promedioEdadSolteros.toFixed(0)}"`);
		
}//fin de la funcion
