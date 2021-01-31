/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //asigno espacio de memoria para declarar mis variables
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    //asigno y parseo valores a cada variable
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    //Opero con las variables
    resultado = precio1 + precio2 + precio3;

    //utilizo "alert" para enviar el valor de resultado a pantalla
    alert(`La suma de los precios ingresados es: ${resultado}`);
    
}
function Promedio () 
{
	//asigno espacio de memoria para declarar mis variables
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    //asigno y parseo valores a cada variable
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    //Opero con las variables
    resultado = (precio1 + precio2 + precio3)/3;

    //utilizo "alert" para enviar el valor de resultado a pantalla
    alert(`El promedio de los precios ingresados es: ${resultado}`);
}
function PrecioFinal () 
{

	//asigno espacio de memoria para declarar mis variables
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    //asigno y parseo valores a cada variable
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    //Opero con las variables
    resultado = (precio1 + precio2 + precio3)*1.21;

    //utilizo "alert" para enviar el valor de resultado a pantalla
    alert(`El precio final (IVA incluido 21%) es: ${resultado}`);    

}