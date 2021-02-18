function mostrar()
{

    //declaro variables
    let precio;
    let descuento;
    let precioFinal;

    //tomo datos del usuario para el precio del producto
    precio = prompt(`Ingrese Precio del producto`, `precio en pesos`);

    precio = parseFloat(precio);

    //tomo datos del usuario para el descuento a aplicar
    descuento = prompt(`Ingrese el descuento a aplicar`, `valor en números ej: 50`);

    descuento = parseFloat(descuento);

    //se realiza el cálculo del precio final correspondiente    

    precioFinal = precio - (precio * (descuento/100));

    //informo en pantalla a través del cuadro de texto
    document.getElementById("elPrecioFinal").value = `El precio con descuento es $ ${precioFinal}`; 

    //fin de la función.


}
