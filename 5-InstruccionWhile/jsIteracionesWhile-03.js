/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	//declaro variables
	let claveIngresada;
	let contador;

	//tomo valor para la variable
	claveIngresada = prompt("ingrese la clave.");

	contador = 1;

	//evaluo el loop
	while (claveIngresada !="utn750" )
	{
		contador++;

		if (contador <4) 
		{
			claveIngresada = prompt("ingrese la clave."); //pido el input de la clave	
		}
		else
		{
			alert(`USUARIO BLOQUEADO`);
		}
		
	}	

}//FIN DE LA FUNCIÓN
