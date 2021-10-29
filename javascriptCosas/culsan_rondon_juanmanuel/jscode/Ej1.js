function ejercicio1(){
    var valor = document.querySelectorAll("input")[0];
    var dinero = parseInt(prompt("Dime la cantidad en euros: "));
    var resultado = 1.1642 * dinero;
    alert("el resultado es: "+resultado); 
}

function ejercicio2(){
    var ejer = document.querySelectorAll("input")[1];
    var cond=0;
    var suspenso=0;
    var aprobado=0;
    var notable=0;
    var sobresaliente=0;

    do {
        var nota=parseInt(prompt("Dime la nota: "));
        if(nota<4){
            suspenso++;
        }
        else if(nota<7){
            aprobado++;
        }
        else if(nota<9){
            notable++;
        }
        else{
            sobresaliente++;
        }   
        cond++;
    } while (cond<10);

    alert("Suspenso: "+suspenso+"\n"+"Aprobado: "+aprobado+"\n"+"Notable: "+notable+"\n"+"Sobresaliente: "+sobresaliente);   
}

function ejercicio3(){
    var ejercicio3 = document.querySelectorAll("input")[2];
    var cond=0;
    var array=[];
    var sum;
    var num=1

    while(num>0){
        num = parseInt(prompt("Dime un numero: "));
        document.getElementById("p1").innerHTML=num;
        array[cond]=num;
        cond++; 
    }

    for (let i = 0; i < array.length;i++) {
        sum+=array[i];
    }
    document.getElementById("p1").textContent=sum;
}

function ejercicio4() {
    var ejercicio4 = document.querySelectorAll("p")[1];
    var max = 5;
    var par=[];
    var impar=[];
    var valor;

    for (let i = 0; i < max; i++) {
        valor = parseInt(prompt("Dame un valor: "));
        if(valor%2==0){
            par[i]=valor;
        }

        if(valor%2==1){
            impar[i]=valor;
        }
        else{
            
        }
        // var mensaje = "Pares" + par.join(",");
        // mensaje += "<br> Impares" + impar.join(",");
        // document.getElementById("p2").textContent = mensaje;
    }

    ejercicio4.innerHTML= "Pares: " + par + "<br> " + "Impares: " + impar;

    // for(let i =0; i<par.length ;i++){
    //     document.getElementById("p2").textContent="pares: "+par[i];
    // }
    // for(let i =0; i<impar.length ;i++){
    //     document.getElementById("p2").textContent="impares: "+impar[i];
    // }

}