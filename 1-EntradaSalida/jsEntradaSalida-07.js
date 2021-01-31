/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	//declaro las variables y reservo espacio en la memoria
	let numerouno;
	let numerodos;
	let resultado;
	
	//Asigno valores a traves del input del usuario a cada variable
	numerouno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;
	
	//Preparo la operación de las variables numerouno y numero dos, dentro del valor de la variable resultado
	resultado = parseInt(numerouno)+parseInt(numerodos);
	
	//pongo en pantalla el resultado de la suma
	alert(`La Suma es ${resultado}`);
}

function restar()
{
	//declaro las variables y reservo espacio en la memoria
	let numerouno;
	let numerodos;
	let resultado;
	
	//Asigno valores a traves del input del usuario a cada variable
	numerouno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;

	//Preparo la operación de las variables numerouno y numero dos, dentro del valor de la variable resultado
	resultado = parseInt(numerouno)-parseInt(numerodos);
	
	//pongo en pantalla el resultado de la suma
	alert(`La Resta es ${resultado}`);	
}

function multiplicar()
{ 
	//declaro las variables y reservo espacio en la memoria
	let numerouno;
	let numerodos;
	let resultado;
	
	//Asigno valores a traves del input del usuario a cada variable
	numerouno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;

	//Preparo la operación de las variables numerouno y numero dos, dentro del valor de la variable resultado
	resultado = parseInt(numerouno)*parseInt(numerodos);
	
	//pongo en pantalla el resultado de la suma
	alert(`El Producto es ${resultado}`);	
}

function dividir()
{
	//declaro las variables y reservo espacio en la memoria
	let numerouno;
	let numerodos;
	let resultado;
	
	//Asigno valores a traves del input del usuario a cada variable
	numerouno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;

	//Preparo la operación de las variables numerouno y numero dos, dentro del valor de la variable resultado
	resultado = parseInt(numerouno)/parseInt(numerodos);
	
	//pongo en pantalla el resultado de la suma
	alert(`El Cociente es ${resultado}`);
}

