/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaro las variables y reservo espacio en la memoria
	let importe;
	let resultado;

	//Asignamos el valor del input "importe" en la variable correspondiente
	importe = parseInt(document.getElementById("txtIdImporte").value);

	//calculamos la disminución y lo asignamos a otra variable
	resultado = importe - (importe * 0.250);
	
	//ponemos el resultado en el cuadro de texto solicitado
	document.getElementById("txtIdResultado").value = resultado;




}
