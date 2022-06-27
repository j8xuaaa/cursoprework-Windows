class Billete{
  constructor(valor, cantidad){
    this.valor = valor;
    this.cantidad = cantidad;
  }
}
function entregarDinero() {
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value); //parse int significa parsear a entero
  for(var bi of caja){//Agarra los elementos 1 por 1 e irlos colocando en bi
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      }else {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if(dinero > 0){
    resultado.innerHTML = "No tengo dinero :("; //Manera de manipular mi parrafo en vez de document.write
  }else {
    for(var e of entregado){
      if (e.cantidad > 0) {//>0 para que no me muestre los billetes que no se entregaron
        resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $ " + e.valor + "<br />";
      }
    }
  }
}


function limpiarPantalla(){
  resultado.innerHTML = "";
  entregado.length = 0
}

var caja = [];
var entregado = [];
caja.push( new Billete(125,5));//0
caja.push( new Billete(100,5));//1
caja.push( new Billete(50,10));//2
caja.push( new Billete(20,30));//3
caja.push( new Billete(10,10));//4
caja.push( new Billete(5,5));//5


var dinero; //ingreso de extraccion

var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");//Obtener elemento de html por id
var l = document.getElementById("limpiar");
b.addEventListener("click", entregarDinero);
l.addEventListener("click", limpiarPantalla);
/*El reto es que no haiga necesidad de reiniciar la pagina para que funcione el
programa, que a la par muestre cuanto dinero tiene y cuanto es lo que ha dado,
por ultimo ingresar un dibujo de billetes que el cajero ha dado*/
