/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	//declaro variables
	let numeroIngresado;
	let numero;

	//tomo valor del usuario
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	//parseo lo ingresado por el usuario
	numeroIngresado = parseInt(numeroIngresado);
	
	//cargo el valor en la variable numero para poder informarla
	numero = numeroIngresado;

	while (numeroIngresado >= 0 && numeroIngresado < 10  ) //evaluo el loop
	{
		document.getElementById("txtIdNumero").value = numero;	//escribo en pantalla

		numeroIngresado = ""; //reinicio el valor de la variable
	}

}//FIN DE LA FUNCIÓN