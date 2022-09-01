

//---------- Gestor de comandas de restaurante

let pizza = "1"
let costoPizza = 500

let pasta = "2"
let costoPasta = 350

let ensalada = "3"
let costoEnsalada = 400

let carne = "4"
let costoCarne = 600

let pedido 
let precioAcumulado = 0

function infoPrecio (){
	console.log(precioAcumulado)
}

let numeroMesa = parseInt(prompt("Ingrese numero de mesa"))

do{ pedido = prompt("Ingrese su pedido por favor pizza=1 pasta=2 ensalada=3 carne=4 o fin para cerrar pedido") 
	if( pedido == "1") {alert("Usted ha cargado una pizza"); console.log("usted a encargado una pizza");
	precioAcumulado = precioAcumulado + costoPizza ; infoPrecio()}

	else if( pedido == "2") {alert("Usted ha cargado una pasta"); console.log("ud ha encargado una pasta")
	precioAcumulado = precioAcumulado + costoPasta ; infoPrecio()}
	
	else if( pedido == "3") {alert("Usted ha cargado una ensalada"); console.log("usted ha encargado una ensalada")
	precioAcumulado = precioAcumulado + costoEnsalada ; infoPrecio()}
	
	else if( pedido == "4") {alert("Usted ha cargado una carne"); console.log("usted ha encargad una carne")
	precioAcumulado = precioAcumulado + costoCarne ; infoPrecio()}
    
    else if( pedido != "fin") {alert("codigo inexistente")}


}while(pedido != "fin")


alert("el precio total de la mesa " + numeroMesa + " es " + precioAcumulado + " pesos.")

document.write("el precio total de la mesa " + numeroMesa + " es " + precioAcumulado + " pesos.")