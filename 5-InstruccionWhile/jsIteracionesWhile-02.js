/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{

	//delcaro variables
	let descendente;

	//Otorgo valor para controlar el orden ascendente
	descendente = 10;

	//armo el loop
		while (descendente > 0) //evaluo el valor de ascendente
		{
			alert(`El numero es ${descendente}`); //publico en pantalla el valor obtenido
			
			descendente--; //disminuyo el valor de descendente
		}


		
}//FIN DE LA FUNCIÓN
