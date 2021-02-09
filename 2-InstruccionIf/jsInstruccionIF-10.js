function mostrar()
{

	//declaro variables
	let calificacion;

	//Cargo valores en la variable
	calificacion = Math.floor(Math.random() * 10)+1;

	//parseo la calificación para evitar los decimales

	calificacion = parseInt(calificacion);

	//Genero el número RANDOM entre 1 y 10 

	if (calificacion >= 9) 
	{
		alert("Su nota es " + calificacion + ", EXCELENTE");

	} 
	else 
	{
		if (calificacion >= 4 && calificacion < 9) 
		{
			alert("Su nota es " + calificacion +", APROBO");

		} 
		else
		{
			alert("Su nota es " + calificacion +", Vamos, la proxima se puede");
		}
		
	}
	

}//FIN DE LA FUNCIÓN