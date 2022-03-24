var tutor1 = {
        nombre: "Javi",
        edad: 38,
        dni: "12345678B",
        titulo_uni: "Ingeniería electrica"
    }

var tutor2 ={
    nombre: "Jaime",
    edad: 40,
    dni: "87654321C",
    titulo_uni: "Ingeniería de software"
}

var asignaturas = [ 
    {
        nombre: "Desarrollo en entorno de servidores",
        curso: 2,
        num_horas: 300
    },
    {
        nombre: "Desarrollo en entorno de clientes",
        curso: 2,
        num_horas: 300
    },
    {
        nombre: "Despliegue de aplicaciones web",
        curso: 2,
        num_horas: 150
    },
    {
        nombre: "Diseño de interfaces",
        curso: 2,
        num_horas: 300
    }
];

var alumno = {
    nombre: "Josemi",
    edad: 21,
    ciclo: "DAW",
    curso: 2,
    tutor: tutor1,
    modulos: asignaturas,
    nota_media: [8,7.25,10,9]
}

// for, foreach, for in, for of

//usamos -for in- porque sirve para recorrer obejtos 
window.onload = () => {

    //console.log(alumno.nombre);
    var nuevo = document.createElement("div");
    document.querySelector("section").appendChild(nuevo);
    for (let campo in alumno) {
        //console.log(alumno.campo); ESTO NO FUNCIONA
        console.log(alumno[campo]);
        let nuevoSpan= document.createElement("span");
        let texto="";

        switch(campo){
            case "tutor":
                for (let dato in alumno[campo]) {
                    //console.log(alumno[campo]+" : "+dato);
                    texto += alumno[campo][dato]+" ";
                }
                break;
            case "modulos":
                for (let ind in alumno[campo]) {
                    texto += ind.nombre+" ";
                }
                break;
            case "nota_media":
                let suma=0;
                for (let ite of alumno[campo]) {
                    suma+=ite;
                }
                texto="La media es: "+(suma/alumno[campo].length);
                break;
            default: texto=alumno[campo];
        }

        let nodotexto = document.createTextNode(texto);
        //nuevoSpan.textContent = alumno[campo]; otra forma
        
        nuevoSpan.appendChild(nodotexto);
        nuevo.appendChild(nuevoSpan);
    }
}