
function ejercicio1(){

    const vconversion=1.1642;//valor contante para saber porque multiplicar para pasar de un valor a otro
    var euro=prompt("Introduce la cantidad en Euros");//pido datos
    var dolar=0;

    dolar=parseInt(euro)*vconversion;//pasar de € a $
    alert(euro+"€ equivalen a "+dolar+"$");//sacar por pantalla
}

function ejercicio2() {
    
    var notas=[],calificaciones=[0,0,0,0];//inicio los arrays, las calificaciones empiezan por 0 y suman mas tarde
    for (let i = 0; i < 10; i++) {
        
        notas[i]=prompt("Itroduce "+(i+1)+"ª nota");

        if (notas[i]<5&&notas[i]>=0) {//if para saber si la nota que pido es suspenso, aprobado, notable o sobresaliente
            
            calificaciones[0]++;//añade 1 suspenso al array
        }
        else if (notas[i]>=5&&notas[i]<=6) {
            
            calificaciones[1]++;//añade 1 aprobado al array
        }
        else if (notas[i]>=7&&notas[i]<=8) {
            
            calificaciones[2]++;//añade 1 notable al array
        }
        else if (notas[i]>=9&&notas[i]<=10) {
            
            calificaciones[3]++;//añade 1 sobresaliente al array
        }
        else{
            i--;//si el usuario mete una letra u otra cosa rara vuelvo a pedir la nota, porque esta mal
        }//final if
    }//final for

    alert("Suspensos: "+calificaciones[0]+"\nAprobados: "+calificaciones[1]+"\nNotables: "+calificaciones[2]+"\nSobresalientes: "+calificaciones[3]);//alert para decir las cosas
}

function ejercicio3() {
    
    var num=0,suma=0;
    var parraf=document.querySelectorAll("p");

    while (num>=0) {//bucle no sale hasta que numero introducido no sea negativo
        
        num=prompt("Introduce numero positivo");

        if (num>=0) {//si el numero es negativo no lo meto en el parrafo ni en la suma
            
            parraf[0].textContent+=num+" ";//voy metiendo en el parrafo los numeros
            suma+=parseInt(num);
        }//final if
    }//final while

    parraf[0].textContent=(parraf[0].textContent+" = "+suma);//meto en el parrafo el total de la suma de los numeros
}

function ejercicio4() {
    
    var num=[],pares=[],impares=[],vari=[];
    var parraf=document.querySelectorAll("p");

    for (let i = 0; i < 5; i++) {//pido numeros
        
        num[i]=prompt("Inserte numero");
    }//fin for

    for (let i = 0; i < 5; i++) {
        
        vari[0]=parseInt(Math.random()*10)+1;//meto en vari[0] numero aleatorio
        vari[1]=num[i];//meto en vari[1] el numero que se ha pedido sin randomizar

        num[i]=num[i]*(vari[0]);//en el array num quedan guardados los numeros randomizados

        console.log(vari[1]+" * "+vari[0]+" = "+num[i]);//saco por consola la operacion al completo

        if (num[i]%2==0) {//compruebo si el numero es par o impar y lo meto en su array correspondiente
            pares[i]=num[i];
        }
        else{
            impares[i]=num[i];
        }//fin if
    }//fin for

    parraf[1].textContent="Pares= ";
    for (let i = 0; i < pares.length; i++) {//saco todos los numeros pares
        
        if (pares[i]!=undefined) {
            parraf[1].textContent+=pares[i]+" ";
        }//fin if
    }//fin for

    parraf[1].textContent+="Impares= ";
    for (let i = 0; i < impares.length; i++) {//saco todos los numeros impares
        
        if (impares[i]!=undefined) {
            parraf[1].textContent+=impares[i]+" ";
        }//fin if
    }//fin for
}