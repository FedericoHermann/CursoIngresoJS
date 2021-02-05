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
     
    //defino variables
    let cantidad;
    let marca;
    let precioOrig;
    let precioDesc;
    let precioFinal;
    let iibb;

    //asigno valores a las cantidades
    cantidad = document.getElementById("txtIdCantidad").value;
    cantidad = parseInt(cantidad);

    //asigno valores a la elección de "marca"
    marca = document.getElementById("Marca");
    marca = toString(marca);

    //establezco el precio original
    precioOrig = 35;

    //Bloque de código para condiciones de venta a aplicar según cantidad y marca.
    if (cantidad >= 6) {
         //A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
         precioDesc = (precioOrig*cantidad)*(50/100);
         precioFinal = precioDesc; 
         precioFinal = parseFloat(precioFinal); //Determino el precio final con el descuento aplicado
            if (precioFinal > 120) { //calculo IIBB
                iibb = precioFinal * 0.10; 
                document.getElementById("txtIdprecioDescuento").value = precioFinal;
                alert(`Usted pago $${iibb} en concepto de IIBB `);
            } else {
                document.getElementById("txtIdprecioDescuento").value = precioFinal; 
            } 
    } else {
            /*B.Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
            y si es de otra marca el descuento es del 30%.*/
            switch (cantidad) {
                    case 5:
                        if (marca === "ArgentinaLuz") {
                            precioDesc = (precioOrig*cantidad)/1.4;
                            precioFinal = precioDesc; 
                            precioFinal = parseFloat(precioFinal); //Determino el precio final con el descuento aplicado
                                
                        } else {
                            precioDesc = (precioOrig*cantidad)/1.3;
                            precioFinal = precioDesc; 
                            precioFinal = parseFloat(precioFinal); //Determino el precio final con el descuento aplicado      
                            }
                        break;
                     /*C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
                     se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.*/

                    case 4:
                        if (marca === "ArgentinaLuz" || marca === "FelipeLamparas") {
                            precioDesc = (precioOrig*cantidad)/1.25;
                            precioFinal = precioDesc; 
                            precioFinal = parseFloat(precioFinal); //Determino el precio final con el descuento aplicado
                                
                        } else {
                            precioDesc = (precioOrig*cantidad)/1.2;
                            precioFinal = precioDesc; 
                            precioFinal = parseFloat(precioFinal); //Determino el precio final con el descuento aplicado
                        }
                        
                         break;

                    /*D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
                    si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.*/
                    case 3:
                        if (marca === "ArgentinaLuz") {
                            precioDesc = (precioOrig*cantidad)/1.15;
                            precioFinal = precioDesc; 
                            precioFinal = parseFloat(precioFinal); //Determino el precio final con el descuento aplicado
                                
                            } else {
                                if (marca === "FelipeLamparas") {
                                    precioDesc = (precioOrig*cantidad)/1.1;
                                    precioFinal = precioDesc; 
                                    precioFinal = parseFloat(precioFinal); //Determino el precio final con el descuento aplicado
                                        
                                } else {
                                    precioDesc = (precioOrig*cantidad)/1.05;
                                    precioFinal = precioDesc; 
                                    precioFinal = parseFloat(precioFinal); //Determino el precio final con el descuento aplicado
                                 
                                }
                        }
                        break;
                        
                    default:
                        precioFinal = precioOrig*cantidad;
                    break;
                }

    if (precioFinal > 120) { //calculo IIBB
        iibb = precioFinal * 0.10; 
        document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);
            alert(`Usted pago $${iibb.toFixed(2)} en concepto de IIBB `);
        } else {
           document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2); 
            }

}
    
   
    
       
            



       
    

    


