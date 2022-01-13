//FORMULARIOS

//los formularios se usan para pedir/enviar información

//<input type="button" name="botoncito" value="ACEPTAR">
/*
var boton=document.querrySelector(input type="button");

boton.value => para el texto del boton (ACEPTAR)
boton.disable = true; => para deshabilitarlo
boton.focus() = ese boton gana el foco
boton.click() => forzar a que se pulse un boton de manera automatica

*/

//<input type="checkbox" name="tenis" value="ACEPTAR" checked><span>tenis</span>
/*
Puedes dejar todos pulsados

var cuadrado = document.querrySelector(input type="checkbox");
con el value elegimos lo que enviamos por el checkbox

cuadrado.checked=false;

cuadrado.defaultchecked es si por defecto está marcado


*/


/*
<input type="radio" name="santi" value="7">Si
<input type="radio" name="juanfran" value="3">No
<input type="radio" name="juanje" value="9">Tal vez

¿es bueno fungir por las mañanas?
o Si 
o No
o Tal vez

Aqui podemos pulsar todos porque los names son distintos

<input type="radio" name="santi" value="7">Si
<input type="radio" name="santi" value="3">No
<input type="radio" name="santi" value="9">Tal vez

¿es bueno fungir por las mañanas?
o Si 
o No
o Tal vez

Ahora solo puedes marcar uno 

var bloque = document.querrySelectorAll("input[type='radio'"]);

var f = document.querrySelector(form);
f.santi.length;

if(f.santi[0].checked){
    console.log("kakota");
}

f.santi[2].click();

*/

/*
<input type="button"/"submit"/"reset" />


<textarea name="comentario">
    Caja de texto multilinea aqui se escribe algo por defecto sin el placeholder, aunque no es bueno poner nada
</textarea>  => NUNCA SE DEBE PONER EL ATRIBUTO "value"

*/

/*
LISTA DESPLEGABLE

var f = document.querrySelector(form);
f.ciudades.options.length;

<select name="ciudades">
    <option>Malaga</option>
    <option>Cordoba</option>
    <option value="Jaen">Jaen</option>
    <option value="Almeria">Almeria</option>
    <option>Cadiz</option>
</select>

onchange

f.ciudades.options.selectedIndex => te dice la opción de la posición seleccionada en la array 

f.ciudades.options[2].value
f.ciudades.options[2].text

console.log(f.ciudades.options[f.ciudades.selectedIndex].text)




*/