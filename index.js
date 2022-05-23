// Simulador de compras//

let listaBebidasPrecios = ''
let listaProductos;
listaProductos = prompt("Hola, escribí PRODUCTO para ver los productos disponibles")

const bebidas = [{
    bebida: "Coca-Cola",
    sabor: "cola",
    precioProducto: 360
}, {
    bebida: "Fanta",
    sabor: "Naranja",
    precioProducto: 475
}, {
    bebida: "Coca-Cola Zero",
    sabor: "cola",
    precioProducto: 350
}, {
    bebida: "Sprite",
    sabor: "limón",
    precioProducto: 470
}, ];

bebidas.forEach((refresco) => {
    listaBebidasPrecios += refresco.bebida + "\n"
    listaBebidasPrecios += "$" + refresco.precioProducto + "\n"
})

while(listaProductos !== "PRODUCTO"){
    alert("Incorrecto, ingresar PRODUCTO")
    listaProductos = prompt("¡Hola! escribí PRODUCTO para ver los productos disponibles")
}

alert("Estos son nuestros productos disponibles :" +  "\n" +listaBebidasPrecios)

let productos = prompt("Elige tu producto: \n 1. Coca-Cola \n 2. Fanta \n 3. Coca-Cola Zero \n 4. Sprite  \n Escribe ESC para finalizar la compra")

function carrito() {
    switch (productos) {
        case "1":
            alert('Coca-Cola se agregó al carrito');
            precioFinal(360)
            break

        case "2":
            alert('Fanta se agregó al carrito');
            precioFinal(475)
            break

        case "3":
            alert('Coca-Cola Zero se agregó al carrito');
            precioFinal(350)
            break

        case "4":
            alert('Sprite se agregó al carrito');
            precioFinal(470)
            break

        default:
            alert('Todavía no tenemos esa bebida en nuestra tienda ');
    }
}

let precioTotal = 0;

function precioFinal(precio) {
    precioTotal += precio
}

do {
    carrito()
    productos = prompt("Elige tu producto: \n 1. Coca-Cola \n 2. Fanta \n 3. Coca-Cola Zero \n 4. Sprite  \n Escribe ESC para finalizar la compra")
} while (productos != 'ESC') 
    alert('Compra finalizada. El precio total de su compra es : $' + precioTotal)



iniciarApp();


function iniciarApp()
{
    const H1 = document.createElement("h1");
        H1.innerHTML="TIENDA DE REFRESCOS";

        H1.setAttribute("style","color:blue;text-align:center");
        H1.classList.add("miTitulo");
        H1.classList.add("miTitulo2");

    document.body.appendChild(H1);

    const subtitulo = document.createElement("p");
    subtitulo.innerText="Listado de productos:";

    document.body.appendChild(subtitulo);
}

