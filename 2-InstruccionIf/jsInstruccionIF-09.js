function mostrar() 
{
	//declaro variables
	let random;

	//Asigno valores

	random = Math.floor(Math.random() * 10) + 1;

	//parseo para utilizar enteros.

	random = parseInt(random);

	//publico en pantalla el valor de random
	alert(`Su número aleatorio es ${random}`)

}//FIN DE LA FUNCIÓN