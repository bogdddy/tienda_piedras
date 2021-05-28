function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("ore", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("ore");
    myCreateFunction(data);
}

function myCreateFunction(ore) {
    var table = document.getElementById("carrito");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = ore;
    cell2.innerHTML = '<input type="number" value="1"></input>';
  }