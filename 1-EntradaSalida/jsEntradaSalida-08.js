/*

Hermann Federico

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."

Ejercicio 08*/
function SacarResto()
{
	//declaro las variables y reservo espacio en la memoria
	let dividendo;
	let divisor;
	let resto;

	//Asigno valores a traves del input del usuario a cada variable
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);
	
	// construyo un condicional para excluir la posibilidad de división por 0
	if (divisor === 0) {
		resto = "división por cero no admitida";
	} else {
		//Preparo la operación de las variables dividendo y divisor, dentro del valor de la variable resto
		resto = dividendo % divisor;
	}
		
	//Pongo el resultado en pantalla
	alert(`El Resto es ${resto}`);
}
