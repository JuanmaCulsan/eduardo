var ususario = {
    genre: "masculino",
    datos: {
        nombre: "juanma",
        apellido: "culsan",
        edad: 27,
        dni: "12345678I"
    },
    address: {
        calle: "te falta",
        numero: 4,
        ciudad: "Varsovia",
        pais: "toledo"
    },
    coordenadas: {
        latitud: 345,
        longitud: 23
    },
    login: {
        id: "duende34",
        user: "erkanka",
        pass: "hasmirao12",
        picture: "4603.jpg",
    },
    contacto: {
        movil: 767678876,
        email: "meestoycagando@gmail.es",
        SSNN: ["@quepasaloco","@pepitopalotes","@holiwi"]
    }, 
    picturas: {
        big: "big.jpg",
        small: "small.png"
    },
    softwareSkill: ["javaScript","java","python","mysql","html"]
};




window.onload = function(){

    var body = document.querySelector("body");
    var padre = document.createElement("section");
    var div = document.createElement("div");
    var img = document.createElement("img");
    
    body.appendChild(padre);
    padre.appendChild(div);

    for (let key in ususario) {
        let nuevoSpan = document.createElement("span");
        
    }
}

