/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.


TP05 - Hermann Federico 
*/
var numeroSecreto; 
var contadorIntentos; 

function comenzar()
{

  //inicializo el contador
  contadorIntentos = 0;

	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
	 
  //alert(numeroSecreto);


}

function verificar()
{

  let numeroUsuario; //declaro variable y evito la muerte de un gatito bebé

  while (numeroSecreto != numeroUsuario ) 
  {
    //le asigno valor ingresado por le usuario
    numeroUsuario = document.getElementById("txtIdNumero").value; 

    //parseo el valor
    numeroUsuario = parseInt(numeroUsuario);

    contadorIntentos ++; //aumentamos el contador

    document.getElementById("txtIdIntentos").value = contadorIntentos;
    
    if (numeroUsuario == numeroSecreto ) 
    {
      alert(`Usted es un Ganador!!! ... en tan solo ${contadorIntentos} Intentos`);
    } 
    else 
    {
      if (numeroUsuario > numeroSecreto) 
      {
        alert(`casi...Te pasaste!`);  
      } 
        else 
        {
          alert(`casi...Te falta!`);
        }
    }  
    break;

  }

  

}