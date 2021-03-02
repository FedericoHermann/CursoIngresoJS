function mostrar()
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
	if (numero >0) 
	{
		for(i=1; i <= numero; i++ )
		{
			if (numero % i == 0) 
			{
				divisores ++;
				console.log("divisor hallado" + i);
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
				console.log("divisor hallado" + i);
			}
		}
		
	}
		
	console.log("La cantidad de divisores hallados es: " + divisores);


}//FIN DE LA FUNCIÓN