/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //declaro variables
    let temperatura;
    let conversion;

    //asigno valor
    temperatura = parseInt(document.getElementById("txtIdTemperatura").value);

    //opero en la conversión
    conversion = temperatura - 32;

    //muestro resultado en pantalla
    alert(`La temperatura ${temperatura} ºF corresponde a ${conversion} ºC`);


}

function CentigradosFahrenheit () 
{
    //declaro variables
    let temperatura;
    let conversion;

    //asigno valor
    temperatura = parseInt(document.getElementById("txtIdTemperatura").value);

    //opero en la conversión
    conversion = temperatura + 32;

    //muestro resultado en pantalla
    alert(`La temperatura ${temperatura} ºC corresponde a ${conversion} ºF`);
    
}
