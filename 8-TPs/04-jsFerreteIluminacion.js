/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //defino variables a utilizar.
    let marca;
    let cantidad;
    let descuento;
    let precio;
    let iibb;
    let total;

    //tomo datos del usuario y los cargo en las variables correspondientes.

    marca = document.getElementById("Marca").value; //tomo la marca como valor "string" del dropdown menu.

    cantidad = document.getElementById("txtIdCantidad").value; //tomo la cantidad ingresada de lamparas.
    
    cantidad = parseInt(cantidad); //parseo cantidad para convertir su contenido en un número entero.

    /* asigno el precio por unidad.
    Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.*/

    precio = 35; 
    
    //con los valores esenciales tomados, pasamos a la etapa de cálculo.


    if (cantidad >= 6)
    //A.Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
    {
       descuento = 0.5; 
    } 
    else 
    {
        switch (cantidad) 
        {
            case 5:
                /*B.Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
                y si es de otra marca el descuento es del 30%.*/
                if (marca == "ArgentinaLuz") 
                {
                    descuento = 0.4;
                } 
                else 
                {
                    descuento = 0.3; 
                }
                break;

            case 4:
                /*C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace 
                un descuento del 25 % y si es de otra marca el descuento es del 20%.*/
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
                { 
                    descuento = 0.25;
                } 
                else 
                {
                    descuento = 0.2;
                }
                break;

            case 3:
                /*Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  
                “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.*/
                if (marca == "ArgentinaLuz")
                {
                    descuento = 0.15;
                } 
                else 
                {
                    if (marca == "FelipeLamparas") 
                    {
                        descuento = 0.1;
                    } 
                    else 
                    {
                        descuento = 0.05;
                    }
                   
                }
                break;
                
            default:

                descuento = 0;

                break;
        }

    }  

    //calculamos el importe total
    total = (precio - (precio*descuento))*cantidad;

        /*E.Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
        en informar del impuesto con el siguiente mensaje:”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.*/ 
        if (total > 120) 
        {
            iibb = total * 0.1; //cargo el valor de los Ingresos Brutos a la variable.
            alert(`Usted pagó ${iibb} de IIBB`); //Informo el importe del impuesto en pantalla.

            //Modifico el valor total con los Ingresos Brutos sumados.
            total = total + iibb;
        } 


    //finalmente enviamos el valor obtenido al cuadro de texto
    document.getElementById("txtIdprecioDescuento").value = total;

}