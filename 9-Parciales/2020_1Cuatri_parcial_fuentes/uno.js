
function mostrar()
{
	//declaro variables
	let contadorDeProductos;
	let cantidadProductos;
	let precioIngresado;
	let tipoProducto;
	let precioBaratoAlcohol;
	let cantidadAlcohol;
	let contadorAlcohol;
	let fabricanteAlcohol;
	let contadorBarbijo;
	let	contadorJabon;
	let marca;
	let fabricante;
	let flagPrimerAlcohol;
	let cantidadComprasAlcohol;
	let cantidadComprasJabon;
	let cantidadComprasBarbijo;
	let precioAcumuladoAlcohol;
	let precioAcumuladoBarbijo;
	let precioAcumuladoJabon;
	let promedioDeCompra;
	

	//Asigno valores iniciales 
	
	contadorDeProductos = 0;
	contadorAlcohol = 0;
	contadorJabon = 0;
	contadorBarbijo = 0;
	flagPrimerAlcohol = true;
	cantidadComprasAlcohol = 0;
	cantidadComprasBarbijo = 0;
	cantidadComprasJabon = 0;
	precioAcumuladoJabon = 0;
	precioAcumuladoBarbijo = 0;
	precioAcumuladoAlcohol = 0;


	//Realizo bloque de validaciones

	while ( contadorDeProductos < 5 ) 
	{
		tipoProducto = prompt(`Ingrese el tipo de producto deseado`, `barbijo / jabon / alcohol`); // Solicito producto
		tipoProducto = tipoProducto.toLowerCase();

		while ( isNaN(tipoProducto) == false || tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") 
		{
			tipoProducto = prompt(`Error de Ingreso, Reingrese el tipo de producto deseado`, `barbijo / jabon / alcohol`); // Solicito producto
			tipoProducto = tipoProducto.toLowerCase();
		}

		marca = prompt(`Ingrese la Marca del producto`, `ej: lisoform`); // Solicito Marca
		marca = marca.toLowerCase();

		while ( isNaN(marca) == false ) 
		{
			marca = prompt(`Error de Ingreso, Reingrese la Marca seleccionada`, `ej: lisoform`); // Solicito Marca
			marca = marca.toLowerCase();
		}

		fabricante = prompt(`Ingrese Fabricante del Producto`, `ej: 3M`); // Solicito fabricante
		fabricante = fabricante.toLowerCase();

		while ( isNaN(fabricante) == false ) 
		{
			fabricante = prompt(`Error de Ingreso, Reingrese Fabricante seleccionado`, `ej: 3M`); // Solicito fabricante
			fabricante = fabricante.toLowerCase();
		}

		precioIngresado = prompt(`Ingrese el precio de su producto`, "valor en pesos, entre 100 y 300"); //Solicito precio
		precioIngresado = parseInt(precioIngresado);

		while ( isNaN(precioIngresado) == true || precioIngresado < 100  || precioIngresado > 300 ) 
		{
			precioIngresado = prompt(`Error de Precio, Reingrese el precio de su producto`, "valor en pesos, entre 100 y 300"); //Solicito precio
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadProductos = prompt(`Ingrese la cantidad de productos`, `ej: 2`); //solicito cantidad de productos
		cantidadProductos = parseInt(cantidadProductos);

		while ( isNaN(cantidadProductos) == true || cantidadProductos < 0 || cantidadProductos > 1000)
		{
			cantidadProductos = prompt(`Error en cantidad de Productos, reingrese la cantidad de productos`, `ej: 2`); //solicito cantidad de productos
			cantidadProductos = parseInt(cantidadProductos);
		}

		contadorDeProductos ++;

		//Inicio operatoria por productos

		switch (tipoProducto) 
		{
			case "barbijo":

				contadorBarbijo = contadorBarbijo + cantidadProductos; //Cant. Barbijos comprado
				cantidadComprasBarbijo ++; //Cant de veces que se compran barbijos
				precioAcumuladoBarbijo = precioAcumuladoBarbijo + precioIngresado; //Valor acumulado de la compra de barbijos
				break;

			case "alcohol":

				if ( flagPrimerAlcohol == true  || precioIngresado < precioBaratoAlcohol ) 
				{
					precioBaratoAlcohol = precioIngresado;
					cantidadAlcohol = cantidadProductos;
					fabricanteAlcohol = fabricante;
					flagPrimerAlcohol = false;
				} 
				contadorAlcohol = contadorAlcohol + cantidadProductos; //cant. alcoholes comprados
				cantidadComprasAlcohol ++; //cant. veces que se compró alcohol
				precioAcumuladoAlcohol = precioAcumuladoAlcohol + precioIngresado; //Valor acumulado de la compra de Alcohol
				break;

			case "jabon":

				contadorJabon = contadorJabon + cantidadProductos; //cant. de jabones comprados
				cantidadComprasJabon ++; //cant. veces que se compra jabon
				precioAcumuladoJabon = precioAcumuladoJabon + precioIngresado; //Valor acumulado de la compra de jabones
				break;
		}
	}// fin del While

	//a) Del más barato de los alcoholes, la cantidad de unidades y el fabricante

	alert(`La cantidad de unidades de Alcohol, más barato, es ${cantidadAlcohol} y su fabricante es ${fabricanteAlcohol}`);

	//b) Del tipo con mas unidades, el promedio por compra

	if ( contadorAlcohol>contadorBarbijo && contadorAlcohol>contadorJabon  ) 
	{
		promedioDeCompra = precioAcumuladoAlcohol / cantidadComprasAlcohol;
		alert(`El tipo de elemento con más unidades es Alcohol, con ${contadorAlcohol} unidades compradas y un promedio de compra de $${promedioDeCompra}`);
	} 
	else 
	{
		if (contadorBarbijo>contadorAlcohol && contadorBarbijo>contadorJabon) 
		{
			promedioDeCompra = precioAcumuladoBarbijo / cantidadComprasBarbijo;
			alert(`El tipo de elemento con más unidades es Barbijo, con ${contadorBarbijo} unidades compradas y un promedio de compra de $${promedioDeCompra}`);
		} 
		else 
		{
			if(contadorJabon>contadorAlcohol && contadorJabon>contadorBarbijo)
			{
				promedioDeCompra = precioAcumuladoJabon / cantidadComprasJabon;
				alert(`El tipo de elemento con más unidades es Jabón, con ${contadorJabon} unidades compradas y un promedio de compra de $${promedioDeCompra}`);
			}	
		}
	}

	//c) Cuántas unidades de jabones hay en total

	alert(`El total de unidades de Jabón es de ${contadorJabon}`);

}
