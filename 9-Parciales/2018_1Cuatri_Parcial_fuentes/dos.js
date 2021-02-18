function mostrar()
{
  
    //Declaro variables

    let nombre;
    let localidad;

    //tomo datos del cuadro de texto.
   nombre =  document.getElementById("elNombre").value;

   localidad = document.getElementById("laLocalidad").value;

   //Informo en pantalla los datos ingresados.
   alert(`Usted es ${nombre} y vive en la localidad de ${localidad}.`);

   //fin de la funcion



}
