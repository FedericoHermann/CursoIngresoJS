
function mostrar()
{

    //declaro variables.
    let ancho;
    let largo;
    let perimetro;

    //Solicito el input para el valor de "ancho" y parseo
    ancho = prompt(`Ingrese el ancho del rectángulo`, `valor en metros`);
    ancho = parseFloat(ancho);

    //Solicito el input para el valor de "largo" y parseo
    largo = prompt(`Ingrese el largo del rectángulo`, `valor en metros`);
    largo = parseFloat(largo);

    //Establezco el valor para "perimetro"
    perimetro = (ancho * 2) + (largo * 2);

    //informo en pantalla
    alert(`El perímetro de su rectángulo es de ${perimetro} metros.`);

//FIN DEL CODIGO

}
