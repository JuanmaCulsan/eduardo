var usuario={

    genre:"masculino",

    datos:{
        name:"Oliver",
        lastname: "Gotas",
        age: "69",
        dni: "123456789W"
    },
    address:{
        street: "No se",
        number: "22",
        city: "Malaga",
        country: "España"
    },
    coordenates:{
        latitude:"32 08’59.96″ N",
        longitude: "110 50’09.03″W"
    },
    login:{
        id:"242.44.55.3",
        user:"ligma_balls",
        pass:"1234",
        picture:"https://pbs.twimg.com/profile_images/1415831458200043520/huFB1MS2_400x400.jpg"
    },
    contact:{
        phone:"717 003 717",
        email:"sugerencias@burgerking.es",
        SSNN:["@twitter","@buscoayudaprofesional","@chupamela"]
    },
    pictures:{
        big: "big.jpg",
        small: "small.png"
    },
    softwareskills:["js","java","python","scratch","php"]

}

window.onload=()=>{

    var nuevo=document.createElement("div");
    document.querySelector("body").appendChild(nuevo);

    for (let campo in usuario) {
        
        let nuevoSpan=document.createElement("p");
        let texto="";

        switch (campo) {

            case "genre":
                texto=usuario[campo];
                break;
            case "datos":

                for (let dato in usuario[campo]) {
                    
                    texto+=dato+": "+usuario[campo][dato]+" // ";
                }
                break;
            case "address":

                for (let dato in usuario[campo]) {
                    
                    texto+=dato+": "+usuario[campo][dato]+" // ";
                }
                break;
            case "coordenates":

                for (let dato in usuario[campo]) {
                    
                    texto+=dato+": "+usuario[campo][dato]+" // ";
                }
                break;

            case "login":

                for (let dato in usuario[campo]) {
                    
                    if (dato=="picture") {
                        let img=document.createElement("img");
                        img.src=usuario[campo][dato];
                        img.style.height="100px";
                        img.style.borderRadius="50%";
                        img.style.border="solid black 3px"
                        nuevoSpan.appendChild(img);
                    }
                    else{   
                        texto+=dato+": "+usuario[campo][dato]+" // ";
                    }
                }
                break;

            case "contact":

                for (let dato in usuario[campo]) {
                    
                    texto+=dato+": "+usuario[campo][dato]+" // ";
                }

                break;
            
            case "pictures":

                for (let dato in usuario[campo]) {
                    
                    let img=document.createElement("img");
                    img.src=usuario[campo][dato];
                    nuevoSpan.appendChild(img);
                }
                break;


            case "softwareskills":

                texto+=campo+": "+usuario[campo]+" // ";

                break;
            default:
                break;
        }

        texto=document.createTextNode(texto);

        nuevoSpan.appendChild(texto);
        nuevo.appendChild(nuevoSpan);
    }
}