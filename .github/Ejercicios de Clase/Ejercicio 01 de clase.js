/*

Hermann Federico

Pedir al usuario los siguientes datos:
nombreDelAlumno: por  id.value
edadDelAlumno: por prompt
Mostrar por alert el mensaje "Ud  se llama ... y tiene ... años"

PUEDEN UTILIZAR EL HTML DEL EJERCICIO 3

DEBEN COMPARTIR EL CODIGO MEDIANTE UN ENLACE DE GDB, EN EL SIGUIENTE FORMULARIO

Ejercicio 01 de clase*/

function mostrar()
{
	let nombreDelAlumno;
	let edadDelAlumno = prompt("Ingrese su edad en números");

	nombreDelAlumno = document.getElementById("txtIdNombre").value;

	alert(`Usted se llama ${nombreDelAlumno} y tiene ${edadDelAlumno} años`);

	document.getElementById("txtIdNombre").value = "";
	//Deja con carácter vacío el valor de la caja de texto creada en HTML
}


