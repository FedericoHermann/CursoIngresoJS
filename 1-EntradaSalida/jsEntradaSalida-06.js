/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro las variables y reservo espacio en la memoria
	let numerouno;
	let numerodos;
	let resultado;
	
	//Asigno valores a traves del input del usuario a cada variable
	numerouno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;

	//Preparo la suma de las variables numerouno y numero dos, dentro del valor de la variable resultado
	resultado = parseInt(numerouno)+parseInt(numerodos);
	
	//pongo en pantalla el resultado de la suma
	alert(`La suma es ${resultado}`);
}

