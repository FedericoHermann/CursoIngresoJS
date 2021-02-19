function mostrar()
{

//declaro variables
let numeroUno;
let numeroDos;
let operacion;


//tomo los datos del usuario para numeroUno y parseo
numeroUno = prompt(`Ingrese el primer número`);
numeroUno = parseFloat(numeroUno);

//tomo los datos del usuario para numeroDos y parseo
numeroDos = prompt(`Ingrese el segundo número`);
numeroDos = parseFloat(numeroDos);

    if (numeroUno == numeroDos) //Evaluamos la posibilidad de que sean iguales ambos números
    {
        alert("El primer número es " + numeroUno + " el segundo número es " + numeroDos);
        
    } 
    else 
    {
        if (numeroUno > numeroDos) 
        {
            operacion = numeroUno - numeroDos;
        } 
        else 
        {
            if (numeroUno < numeroDos) 
            {
                operacion = numeroUno + numeroDos; 
            }
        }  
    }
    if (operacion > 10) 
    {
      alert (`la suma es ${operacion} y supero el 10`)  
    }
    else
    {
        alert(`El resultado es ${operacion}`);
    }
}
