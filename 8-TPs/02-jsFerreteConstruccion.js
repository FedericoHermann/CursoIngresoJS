/*

Hermann Federico

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

TP02*/

function Rectangulo () 
{

//asigno espacio de memoria para declarar mis variables
    let largo;
    let ancho;
    let resultado;

//asigno y parseo valores a cada variable
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    

// opero para obetener el resultado
    resultado = (largo*2 + ancho*2)*3;

//pongo en pantalla el resultado
    alert(`La cantidad de Alambre necesaria para rodear el terreno rectangular, con tres hilos de alambre es de: ${resultado.toFixed(2)} metros`);

}

function Circulo () 
{
//asigno espacio de memoria para declarar mis variables
    let radio;
    let resultado;

//asigno y parseo valores a cada variable
    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

// opero para obetener el resultado
    resultado = (2*Math.PI*radio)*3;

//pongo en pantalla el resultado
alert(`La cantidad de Alambre necesaria para rodear el terreno circular, con tres hilos de alambre es de: ${resultado.toFixed(2)} metros`);    
}

function Materiales () 
{

//asigno espacio de memoria para declarar mis variables
    let largo;
    let ancho;
    let cal;
    let cemento;

//asigno y parseo valores a cada variable (uso parseInt para que la cantidad de bolsas sea siempre entera)
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);


// opero para obetener el resultado
    cal = (largo*ancho)*3;

    cemento = (largo*ancho)*2;

//pongo en pantalla el resultado
    alert(`La cantidad de material para realizar el contrapiso es de, ${cal} bolsas de cal y ${cemento} bolsas de cemento.`);
}