//Permite el drop
function allowDrop(ev) {
    ev.preventDefault();
}

//Permite el arrastrado
function drag(ev) {
    ev.dataTransfer.setData("ore", ev.target.id);
}

//Ejecuta el drop y guarda la información del objeto
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("ore");
    checkProduct(data);

}


var lista = [];       //Lista de productos   
var cantidad = [];    //Cantidad de cada producto

//Comprueba si el producto ya se ha seleccionado anteriormente
function checkProduct(data) {
    if (lista.indexOf(data) == -1) {
        myCreateFunction(data);
    }
    else {
        addItem(data);
    }
}

//Si el producto no se ha seleccionado anteriormente, crea una nueva celda con la información
function myCreateFunction(ore) {
    let table = document.getElementById("carrito");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    lista.push(ore)
    cantidad.push(1);
    cell1.innerHTML = ore;
    cell2.innerHTML = '<input type="number" id=input_' + ore + ' value="1"></input>';
}

//Si el producto ya se ha seleccionado anteriormente, suma 1 al valor de su input
function addItem(ore) {
    let input = document.getElementById("input_" + ore);
    let aux = parseInt(input.value);
    input.value = ++aux;
    cantidad[lista.indexOf(ore)] += 1;
    console.log(cantidad);
}

console.log(lista);
console.log(cantidad);
//   var prueba=document.getElementById("add_Iron");
//   prueba.addEventListener("click", checkProduct("Iron_Ore"));
document.getElementById("add_Iron").addEventListener("click", function () { checkProduct("Iron_Ore"); });
document.getElementById("add_Gold").addEventListener("click", function () { checkProduct("Gold_Ore"); });
document.getElementById("add_Emerald").addEventListener("click", function () { checkProduct("Emerald_Ore"); });
document.getElementById("add_Lapis_Lazuli").addEventListener("click", function () { checkProduct("Lapis_Lazuli_Ore"); });
document.getElementById("add_Diamond").addEventListener("click", function () { checkProduct("Diamond_Ore"); });
document.getElementById("add_Nether_Quartz").addEventListener("click", function () { checkProduct("Nether_Quartz_Ore"); });
//boton finalizar compra
document.getElementById("checkout").addEventListener("click", function () { alert(totalPrice()); });

function totalPrice() {
    let price = 0;

    lista.forEach(ore => {

        switch (ore) {
            case "Iron_Ore":
                price = price + (20 * cantidad[lista.indexOf(ore)]);
                break;

            case "Gold_Ore":
                price = price + (50 * cantidad[lista.indexOf(ore)]);
                break;

            case "Emerald_Ore":
                price = price + (100 * cantidad[lista.indexOf(ore)]);
                break;

            case "Lapis_Lazuli_Ore":
                price = price + (80 * cantidad[lista.indexOf(ore)]);
                break;

            case "Diamond_Ore":
                price = price + (1000 * cantidad[lista.indexOf(ore)]);
                break;

            case "Nether_Quartz_Ore":
                price = price + (500 * cantidad[lista.indexOf(ore)]);
                break;

        }
    });
    let table = document.getElementById("carrito");
    table.innerHTML="<tr><th>Producto</th><th>Cantidad</th></tr>";
    lista=[];
    cantidad=[];
    return(price);
}

