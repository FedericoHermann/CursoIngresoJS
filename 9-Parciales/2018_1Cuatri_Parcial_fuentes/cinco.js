function mostrar()
{
    // declaro variables
    let planeta;

    //asigno valor inicial
    planeta = prompt(`Ingrese un Planeta del Sistema solar`, "Ej: tierra");
    planeta = planeta.toLocaleLowerCase();

    switch (planeta) 
    {
        case "mercurio":
        case "venus":
            alert("acá hace más calor")
            break;
            
        case "tierra":
            alert("acá vivimos")
            break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "pluton":
            alert("acá hace más frío")
            break;
            
        default:
            alert("No es un planeta válido")
            break;
    }
}
