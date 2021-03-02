/*function mostrar()
{
	//declaro variables
	let numero;
	let divisores;
	let i;

	//inicializo variables
	divisores = 0;

	//Pido dato de entrada original
	numero = prompt("Ingrese Número");
	numero = parseInt(numero);

	//busco divisores
	console.log("Para el número ingresado :" + numero);

	if (numero >0) 
	{
		for(i=1; i <= numero; i++ )
		{
			if (numero % i == 0) 
			{
				divisores ++;
				console.log("divisor hallado: " + i);
			}
		}
	} 
	else 
	{
		for(i=1; i >= numero; i-- )
		{
			if (numero % i == 0) 
			{
				divisores ++;
				console.log("divisor hallado: " + i);
			}
		}
		
	}
		
	console.log("La cantidad de divisores hallados es: " + divisores);


}//FIN DE LA FUNCIÓN*/


//Ejercicio de Clase 01 - Hermann Federico
/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado (hecho)
b)El porcentaje de enfermos sobre el total de mascotas (hecho)
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal (hecho)
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son? (hecho)
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas (hecho)
i)El nombre y raza del gato sin pelos mas liviano*/

function mostrar()
{

let mascota;
let pelaje;
let edad;
let nombre;
let raza;
let peso;
let estadoClinico;
let temperatura;
let perroMasPesado;
let nombrePerroMasPesado;
let gatoLiviano;
let razaGatoLiviano;
let contadorMascotas;
let estaEnfermo;
let ultNombreOtracosa;
let sinPelobajaTemp;
let sinPelobajaRaza;
let sinPelobajaNombre;
let promTempCorpGato;
let acumTempGato;
let contadorGato;
let promTempCorpPerro;
let acumTempPerro;
let contadorPerro;
let promTempCorpOtra;
let acumTempOtra;
let contadorOtra;
let estadoClinicoMenor;
let promedioKilos;
let acumKilos;
let respuesta;
let banderaPrimerGato;
let porcentajeGatosPerros;
let porcentajeEnfermos;
let primerMascota;
let banderaPrimerPerro;
let esAdopcion;
let esInternado;

//inicializo variables
respuesta = "si";
contadorMascotas = 0;
perroMasPesado = 0;
contadorMascotas = 0;
contadorGato = 0;
contadorPerro = 0;
contadorOtra = 0;
acumTempGato = 0;
acumTempPerro = 0;
acumTempOtra = 0;
banderaPrimerGato = true;
gato = 0;
perro = 0;
estaEnfermo = 0;
primerMascota = true;
banderaPrimerPerro = true;
esAdopcion = 0;
esInternado = 0;

//Valido datos de Usuario

while ( respuesta == "si" ) 
{

	mascota = prompt(`Ingrese el tipo de mascota`, `perro / gato / otra cosa`); // Solicito mascota
	mascota = mascota.toLowerCase();
	while ( isNaN(mascota) == false || mascota != "perro" && mascota != "gato" && mascota != "otra cosa") 
	{
	mascota = prompt(`Error de Ingreso, Reingrese el tipo de mascota`, `perro / gato / otra cosa`); 
	mascota = mascota.toLowerCase();
	}

	pelaje = prompt(`Ingrese el tipo de pelaje`, `corto / largo / sin pelo`); //solicito pelaje
	pelaje = pelaje.toLowerCase();
	while ( isNaN(pelaje) == false || pelaje != "corto" && pelaje != "largo" && pelaje != "sin pelo" )
	{
	pelaje = prompt(`Error en tipo de pelaje, reingrese: `, `corto / largo / sin pelo`); 
	pelaje = pelaje.toLowerCase();
	}

	edad = prompt(`Ingrese la edad de la mascota:`, `valor debe ser mayor que 0`); //Solicito edad
	edad = parseInt(edad);
	while ( isNaN(edad) == true || edad < 0 ) 
	{
	edad = prompt(`Error de Ingreso, Reingrese la edad de su mascota:`, "valor debe ser mayor que 0"); 
	edad = parseInt(edad);
	}

	nombre = prompt(`Ingrese el nombre de su mascota`); // Solicito nombre
	nombre = nombre.toLowerCase();
	while ( isNaN(nombre) == false || nombre == "" ) 
	{
	nombre = prompt(`Error de Ingreso, Reingrese el nombre de su mascota`); 
	nombre = nombre.toLowerCase();
	}

	raza = prompt(`Ingrese la raza de su mascota`); // Solicito raza
	raza = raza.toLowerCase();
	while ( isNaN(raza) == false || raza == "" ) 
	{
	raza = prompt(`Error de Ingreso, Reingrese la raza de su mascota`); 
	raza = raza.toLowerCase();
	}

	peso = prompt(`Ingrese la edad de la mascota:`, `valor debe ser mayor que 0`); //Solicito peso
	peso = parseFloat(peso);
	while ( isNaN(peso) == true || peso <= 0 ) 
	{
	peso = prompt(`Error de Ingreso, Reingrese el peso de su mascota:`, "valor debe ser mayor que 0"); 
	peso = parseInt(peso);
	}

	estadoClinico = prompt(`Ingrese el estado clínico`, `enfermo / internado / adopcion`); // Solicito estado clínico
	estadoClinico = estadoClinico.toLowerCase();
	while ( isNaN(estadoClinico) == false || estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion") 
	{
	estadoClinico = prompt(`Error de Ingreso, Reingrese el estado clínico`, `perro / gato / otra cosa`); 
	estadoClinico = estadoClinico.toLowerCase();
	}

	temperatura = prompt(`Ingrese la temperatura de la mascota:`, `valor debe ser mayor que 0`); //Solicito temperatura
	temperatura = parseFloat(temperatura);
	while ( isNaN(temperatura) == true || temperatura < 0 ) 
	{
	temperatura = prompt(`Error de Ingreso, Reingrese la edad de su mascota:`, "valor debe ser mayor que 0"); 
	temperatura = parseFloat(temperatura);
	}

  //Inicio operatoria por tipo de mascota

  switch (mascota) 
  {
	case "perro":	
		contadorMascotas ++;
		if (banderaPrimerPerro == true) //Identifico al perro más pesado
		{
			perroMasPesado = peso;
			nombrePerroMasPesado = nombre; 
			banderaPrimerPerro = false;
		}
		else
		{
			if(peso > perroMasPesado)
			{
				perroMasPesado = peso;
				nombrePerroMasPesado = nombre;
			}	
		}
		contadorPerro ++;
		acumTempPerro = acumTempPerro + temperatura; //tomo datos para el promedio de temperatura
		break;

	case "gato":
		contadorMascotas ++;
		if (pelaje == "sin pelo" && banderaPrimerGato == true)
		{
				gatoLiviano = peso;
				razaGatoLiviano = raza;
				banderaPrimerGato = false;
		}
		else
		{
			if (pelaje == "sin pelo" && peso < gatoLiviano)
			{
				gatoLiviano = peso;
				razaGatoLiviano = raza;
			}
		}
		contadorGato ++;
		acumTempGato = acumTempGato + temperatura;
		break;

	case "otra cosa":
		contadorMascotas ++;
		contadorOtra ++;
		acumTempOtra = acumTempOtra + temperatura;

		break;
  }//fin del switch

  //Evaluo estado Clinico
  if ( estadoClinico == "enfermo" ) 
  {
	estaEnfermo ++;  
  }
  else
  {
	  if (estadoClinico == "adopcion") 
	  {
		esAdopcion ++;  
	  }
	  else
	  {
		esInternado ++;
	  }
  }

  //Evaluo "sin Pelo" con menor temperatura
  if (pelaje == "sin pelo" && primerMascota == true)
  {
	sinPelobajaTemp = temperatura;
	sinPelobajaNombre = nombre;
	sinPelobajaRaza = raza;	  
  }
  else
  {
	  if (pelaje == "sin pelo" && temperatura < sinPelobajaTemp)
	  {
		sinPelobajaTemp = temperatura;
		sinPelobajaNombre = nombre;
		sinPelobajaRaza = raza;	  
	  }
  }

  // acumulo kilos para promediar
  acumKilos = acumKilos + peso;

  respuesta = prompt("¿Desea Ingresar otra mascota?", "si/no");// Solicito respuesta 
  while ( respuesta != "si" && respuesta != "no" ) 
		{
			respuesta = prompt("Error, ¿Desea Ingresar otra Mascota?", "si/no"); 
			respuesta = respuesta.toLowerCase();
		}

}// fin del While
promedioKilos = acumKilos / contadorMascotas; //promedio total de kilos
porcentajeGatosPerros = ((contadorGato+contadorPerro)*100)/contadorMascotas; //porcentaje sumado de perros y gatos
porcentajeEnfermos = (estaEnfermo *100)/contadorMascotas; // Porcentaje de enfermos

document.write("El Perro más pesado es: " +nombrePerroMasPesado +" Con un peso de " +perroMasPesado +" Kilos." + "<br>" );
document.write("El porcentaje de mascotas enfermas es de " + porcentajeEnfermos +"%" + "<br>");
document.write("El nombre de la última Mascota de tipo Otra Cosa es: " + ultNombreOtracosa + "<br>");

}