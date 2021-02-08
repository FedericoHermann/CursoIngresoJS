function mostrar()
{
//Declaro Variables
let mes;

//Asigno valores
mes = document.getElementById("txtIdMes").value;

//preparo la condición
switch (mes) {
		case "Febrero":
			alert("Este mes no tiene más de 29 días.")
			break;
	
		default:
			alert("Este mes tiene 30 o más días.")
			break;
	}


}//FIN DE LA FUNCIÓN