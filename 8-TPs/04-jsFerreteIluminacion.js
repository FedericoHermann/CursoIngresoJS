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
    let descuento;
    let precioFinal;
    let iibb;

    //asigno valores a las cantidades
    cantidad = document.getElementById("txtIdCantidad").value;
    cantidad = parseInt(cantidad);

    //asigno valores a la elección de "marca"
    marca = document.getElementById("Marca").value;
    

    //establezco el precio original
    precioOrig = 35;
    descuento = 1;

    //Bloque de código para condiciones de venta a aplicar según cantidad y marca.
    if (cantidad >= 6) 
    {
         //A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
         descuento = 0.5;  
            
    } 
    else 
    {
        
        switch (cantidad) 
        {
            /*B.Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
            y si es de otra marca el descuento es del 30%.*/
            case 5:
                if (marca == "ArgentinaLuz") 
                {
                    descuento = 0.4;                    
                } 
                else 
                {
                    descuento = 0.3;   
                }
                break;

            /*C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
            se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.*/
            case 4:
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
                {
                    descuento = 0.25;            
                } 
                else 
                {
                    descuento = 0.2;
                }      
                break;

            /*D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
            si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.*/
            case 3:
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
                precioFinal = precioOrig*cantidad;
                break;
        }

        alert(descuento);
    }
   
    precioFinal = precioFinal*descuento; //aplico descuentos
    


    if (precioFinal > 120) 
    { //calculo IIBB
        iibb = precioFinal * 0.10; 
        precioFinal = precioFinal + iibb;
        document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);
        alert(`Usted pago $${iibb.toFixed(2)} en concepto de IIBB `);
    } 
    else 
    {
        document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2); 
    }

}
    
   
    
       
            



       
    

    


