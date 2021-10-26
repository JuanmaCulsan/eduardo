//windows onload para que hasta que no cargue por completo el html no se ejecute el script
window.onload = function(){

    var imagenes =[
        "../../imagenes/2056568.jpg",
        "../../imagenes/Annapurna_Interactive.png",
        "../../imagenes/Captura de pantalla 2021-10-14 105228.png",
        "../../imagenes/Captura de pantalla 2021-10-20 090252.png",
        "../../imagenes/mecanico-automoviles-cliente-dandose-mano_342744-258.jpg"
    ];


    var foto = document.querySelector("#foto");
    var boton = document.querySelector('#bt');
    var back = document.querySelector('#back');
    var contador = 0;


    boton.onclick = function(){
        contador++;
        console.log(contador);
        foto.setAttribute('src',imagenes[contador]);
    }

    back.onclick = function(){
        contador--;
        console.log(contador);
        foto.setAttribute('src',imagenes[contador]);
    }

    // function avanzar() {
    //     var cont = 0;
    //     cont++;
    //     console.log(typeof(cont));
    //     // foto.src = imagenes[cont];
    //     foto.setAttribute('src',imagenes[cont]);
    // }


    
}