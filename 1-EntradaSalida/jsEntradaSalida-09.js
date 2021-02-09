/*

Hermann Federico

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

Ejercicio 09*/
function mostrarAumento() {
	//declaro las variables y reservo espacio en la memoria
	let sueldo;
	let resultado;

	//Asignamos el valor del input "sueldo" en la variable correspondiente
	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);

	//calculamos el aumento y lo asignamos a otra variable
	resultado = sueldo * 1.10;

	//ponemos el resultado en el cuadro de texto solicitado
	document.getElementById("txtIdResultado").value = resultado;
}
