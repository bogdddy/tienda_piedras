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

//Lista de productos   
var lista = {
    'Iron_Ore': 0, 
    'Gold_Ore': 0, 
    'Emerald_Ore': 0, 
    'Lapis_Lazuli_Ore': 0, 
    'Diamond_Ore': 0, 
    'Nether_Quartz_Ore': 0
}

//Comprueba si el producto ya se ha seleccionado anteriormente
function checkProduct(data) {

    if (lista[data] == 0) {
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
    row.id='row_'+ore;
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    lista[ore] += 1;
    cell1.innerHTML = ore;
    cell2.innerHTML = '<input type="number" id=input_' + ore + ' value="1" disabled></input>';
    cell3.innerHTML = '<button class="btn btn-danger" id="delete_' + ore + '">borrar</button>';
    document.getElementById("delete_" + ore).addEventListener("click", function () { deleteProduct(ore); });
}

//Si el producto ya se ha seleccionado anteriormente, suma 1 al valor de su input
function addItem(ore) {

        let input = document.getElementById("input_" + ore);
        let aux = parseInt(input.value);
        input.value = ++aux;
        lista[ore] += 1;

}

// borrar un producto de la lista 
function deleteProduct(ore) {

    let row=document.getElementById("row_"+ore);
    row.parentNode.removeChild(row);
    let input = document.getElementById("input_" + ore);
    lista[ore] = 0;
}

//Botones para añadir al carrito
document.getElementById("add_Iron").addEventListener("click", function () { checkProduct("Iron_Ore"); });
document.getElementById("add_Gold").addEventListener("click", function () { checkProduct("Gold_Ore"); });
document.getElementById("add_Emerald").addEventListener("click", function () { checkProduct("Emerald_Ore"); });
document.getElementById("add_Lapis_Lazuli").addEventListener("click", function () { checkProduct("Lapis_Lazuli_Ore"); });
document.getElementById("add_Diamond").addEventListener("click", function () { checkProduct("Diamond_Ore"); });
document.getElementById("add_Nether_Quartz").addEventListener("click", function () { checkProduct("Nether_Quartz_Ore"); });
//boton finalizar compra
document.getElementById("checkout").addEventListener("click", function () { alert(`el total son ${totalPrice( )}\ngracias por comprar !!` ); });

//calcular precio final
function totalPrice() {
    let price = 0;

    for (const element in lista){

        // tabla de precios 
        switch (element) {
            case "Iron_Ore":
                price = price + (20 * lista[element]);
                break;

            case "Gold_Ore":
                price = price + (50 * lista[element]);
                break;

            case "Emerald_Ore":
                price = price + (100 * lista[element]);
                break;

            case "Lapis_Lazuli_Ore":
                price = price + (80 * lista[element]);
                break;

            case "Diamond_Ore":
                price = price + (1000 * lista[element]);
                break;

            case "Nether_Quartz_Ore":
                price = price + (500 * lista[element]);
                break;
        }
    };

    //vaciar el carrito al finalizar compra
    let table = document.getElementById("carrito");
    table.innerHTML = "<tr><th>Producto</th><th>Cantidad</th><th></th></tr>";
    lista = {
        'Iron_Ore': 0, 
        'Gold_Ore': 0, 
        'Emerald_Ore': 0, 
        'Lapis_Lazuli_Ore': 0, 
        'Diamond_Ore': 0, 
        'Nether_Quartz_Ore': 0
    }
    return (`${price} esmeraldas`);
}

