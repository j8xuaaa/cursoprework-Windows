class Billete{
  constructor(valor, cantidad){
    this.valor = valor;
    this.cantidad = cantidad;
  }
}
function entregarDinero() {
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value); //parse int significa parsear a entero
  console.log(dinero);
  //suma[0] = dinero;
  
  suma[1] = dinero;
  console.log(suma[1]);
  suma[0] = suma[0] + suma[1];
  console.log(suma[0], suma[1]);
  for(var bi of caja){//Agarra los elementos 1 por 1 e irlos colocando en bi
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
        bi.cantidad -= 1;
      }else {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
      bi.cantidad -=1;
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

function moneyEntregado(){
  if (dinero > 0) {
    if (b.addEventListener("click")) {
      suma[0] = suma[0] - suma[1];
    }
  }else if (dinero == null || dinero == NaN){
    entregadoo.innerHTML = "No se ha entregado dinero";
  }else{
    entregadoo.innerHTML = "Se ha entregado " + suma[0];
  }
}

function limpiarPantalla(){
  resultado.innerHTML = "";
  entregado.length = 0
}

var caja = [];
var suma = [];
suma[0] = 0;
var entregado = [];
caja[0]= new Billete(100,1);//1
caja[1]= new Billete(50,1);//2
caja[2]= new Billete(20,1);//3
caja[3]= new Billete(10,1);//4
caja[4]= new Billete(5,1);//5


var dinero; //ingreso de extraccion

var div = 0;
var papeles = 0;
var entregadoo = document.getElementById("entregado");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");//Obtener elemento de html por id
var l = document.getElementById("limpiar");
var e = document.getElementById("dineroEntregado");
b.addEventListener("click", entregarDinero);
l.addEventListener("click", limpiarPantalla);
e.addEventListener("click", moneyEntregado);
/*El reto es que no haiga necesidad de reiniciar la pagina para que funcione el
programa, que a la par muestre cuanto dinero tiene y cuanto es lo que ha dado,
por ultimo ingresar un dibujo de billetes que el cajero ha dado*/