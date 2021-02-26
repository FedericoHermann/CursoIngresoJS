/* Parcial 2020
Ejercicio 02

Hermann Federico */

function mostrar()
{
  //declaro variables

  let tipoProducto;
  let cantidadBolsas;
  let precioBolsa;
  let respuesta;
  let importeTotalBruto;
  let importeTotalDescuento;
  let descuento;
  let contadorArena;
  let contadorCal;
  let contadorCemento;
  let caroArena;
  let caroCal;
  let caroCemento;
  let totalBolsas;
  

  //Asigno valores iniciales 
  caroArena = 0;
  caroCal = 0;
  caroCemento = 0;
  contadorArena = 0;
  contadorCal = 0;
  contadorCemento = 0;
  importeTotalBruto = 0;
  importeTotalDescuento = 0;
  respuesta = "si";


  //Realizo bloque de validaciones

  while ( respuesta == "si" ) 
  {
    tipoProducto = prompt(`Ingrese el tipo de producto deseado`, `arena / cal / cemento`); // Solicito producto
    tipoProducto = tipoProducto.toLowerCase();

    while ( isNaN(tipoProducto) == false || tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento") 
    {
      tipoProducto = prompt(`Error de Ingreso, Reingrese el tipo de producto deseado`, `arena / cal / cemento`); // Solicito producto
      tipoProducto = tipoProducto.toLowerCase();
    }

    cantidadBolsas = prompt(`Ingrese la cantidad de Bolsas`, `ej: 2`); //solicito cantidad de productos
    cantidadBolsas = parseFloat(cantidadBolsas);

    while ( isNaN(cantidadBolsas) == true || cantidadBolsas < 0 )
    {
      cantidadBolsas = prompt(`Error en cantidad de Productos, reingrese la cantidad de Bolsas`, `ej: 2`); //solicito cantidad de productos
      cantidadBolsas = parseFloat(cantidadBolsas);
    }

    precioBolsa = prompt(`Ingrese el precio por Bolsa de Producto`, `valor debe ser mayor que 0, Ej: 100`); //Solicito precio
    precioBolsa = parseFloat(precioBolsa);

    while ( isNaN(precioBolsa) == true || precioBolsa < 0 ) 
    {
      precioBolsa = prompt(`Error de Precio, Reingrese el precio de su producto`, "valor debe ser mayor que 0, Ej: 100"); //Solicito precio
      precioBolsa = parseFloat(precioBolsa);
    }

    //Inicio operatoria por productos

    switch (tipoProducto) 
    {
      case "arena":

        contadorArena = contadorArena + cantidadBolsas; //Cant. bolsas de Arena
        if (precioBolsa > caroArena) 
        {
          caroArena = caroArena + precioBolsa; //Valor acumulado de la compra de Arena para comparar el más caro
        }
        break;

      case "cal":

        contadorCal = contadorCal + cantidadBolsas; //Cant. Bolsas de Cal
        if (precioBolsa > caroCal)
        {
          caroCal = caroCal + precioBolsa; //Valor acumulado de la compra de Cal para comparar el más caro
        }
        break;

      case "cemento":

        contadorCemento = contadorCemento + cantidadBolsas; //cant. de jabones comprados
        if (precioBolsa > caroCemento)
        {
          caroCemento = caroCemento + precioBolsa; //Valor acumulado de la compra de Cemento para comparar el más caro
        }
        break;
    }

    respuesta = prompt("¿Desea Ingresar otro pedido de materiales?", "si/no");
    respuesta = respuesta.toLowerCase();

  }// fin del While

  //a) El importe total a pagar , bruto sin descuento.

  importeTotalBruto = (contadorArena*caroArena) + (contadorCal+caroCal) + (contadorCemento*caroCemento);

  alert(`El Importe Total Burto es de $${importeTotalBruto} `)

  //b) el importe total a pagar con descuento(solo si corresponde)

  totalBolsas = contadorArena + contadorCal + contadorCemento; //calculo la cantidad total de bolsas

  if ( totalBolsas > 30 ) 
  {
    descuento = 0.25;
  } 
  else 
  {
    if (totalBolsas > 10 && totalBolsas < 30) 
    {
      descuento = 0.10;
    } 
    else 
    {
      descuento = 0;
    }
  }

  importeTotalDescuento = importeTotalBruto - (importeTotalBruto * descuento); //aplico descuento

  alert(`El Importe Total con descuento es $${importeTotalDescuento}`); //informo valor final con descuento

  //c) Informar el tipo con mas cantidad de bolsas.

  if (contadorArena > contadorCal && contadorArena > contadorCemento)
  {
    alert(`El tipo de material con más cantidad es Arena con ${contadorArena} bolsas.`);
  } 
  else 
  {
    if (contadorCal > contadorArena && contadorCal > contadorCemento) 
    {
      alert(`El tipo de material con más cantidad es Cal con ${contadorCal} bolsas.`)
    } 
    else 
    {
      if (contadorCemento > contadorArena && contadorCemento > contadorCal) 
      {
        alert(`El tipo de material con más cantidad es Cemento con ${contadorCemento} bolsas.`)  
      }
    }
    
  }

  //d) El tipo mas caro

  if (caroArena > caroCal && caroArena > caroCemento)
  {
    alert(`El tipo de material más caro es Arena con $${caroArena}`);
  } 
  else 
  {
    if (caroCal > caroArena && caroCal > caroCemento) 
    {
      alert(`El tipo de material más caro es Cal con $${caroCal}`)
    } 
    else 
    {
      if (caroCemento > caroArena && caroCemento > caroCal) 
      {
        alert(`El tipo de material más caro es Cemento con un valor por bolsa de $${caroCemento}`)  
      }
    }  
  }
}//fin de la función.
