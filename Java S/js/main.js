

let Usuario= prompt("hola ingresa tu nombre para logearte")
alert("Bienvenido/a" + " " + Usuario)
alert("A continuación te mostrare los articulos de contrucción disponibles")

let ventana1 = 3000
let ventana2 = 5000
let puertaInterior = 6000
let puertaExterior = 8000


let producto = prompt("Elige el articulo que deseas comprar: \n1-Ventana 1x1 \n2-Ventana 1.20x 1.50 \n3- Puerta interior \n4-Puerta para exterior \nPresiona 0 para salir")

if (producto== "1"){
    alert("Has comprado ventana 1x1 a la compra por " + "$" + ventana1)
    alert("Gracias por su compra y vuelva pronto " + Usuario)
} else if (producto == "2"){ 
    alert("Has comprado ventana 1.20 x 1.50 por " + "$" + ventana2)
    alert("Gracias por su compra y vuelva pronto " + Usuario)
} else if (producto == "3"){
    alert("Has comprado una puerta para interior por " + "$" + puertaInterior)
    alert("Gracias por su compra y vuelva pronto " + Usuario)
} else if (producto == "4"){
    alert("Has comprado una Puerta para exterior por " + "$" +puertaExterior)
    alert("Gracias por su compra y vuelva pronto " + Usuario)
}else if(producto == "0"){
alert("Gracias por elegirnos")}
else {
    alert("No has seleccionado una opción valida " + Usuario)
}

    

