/*

Hermann Federico

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").

TP03*/
function FahrenheitCentigrados () 
{
    //declaro variables
    let temperatura;
    let conversion;

    //asigno valor
    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    //opero en la conversión
    conversion = (temperatura - 32)/1.8;

    //muestro resultado en pantalla
    alert(`La temperatura ${temperatura.toFixed(2)} ºF corresponde a ${conversion.toFixed(2)} ºC`);


}

function CentigradosFahrenheit () 
{
    //declaro variables
    let temperatura;
    let conversion;

    //asigno valor
    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    //opero en la conversión
    conversion = (temperatura*1.8) + 32;

    //muestro resultado en pantalla
    alert(`La temperatura ${temperatura.toFixed(2)} ºC corresponde a ${conversion.toFixed(2)} ºF`);
    
}
