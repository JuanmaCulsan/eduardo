var i = 0;
function mover() {
  if (i == 0) {
    i = 1;
    var elem = document.querySelector("#myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        console.log(width);
        if(width==99){
            function descargar(){
                var boton = document.querySelectorAll("button")[0];
                boton.disabled=false;
            }
        }
      }
    }
  }
}