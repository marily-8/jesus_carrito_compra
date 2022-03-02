cacularTotal();

function aumentarPedido() {
    let cantidadActual = document.getElementById("cantidadElementos").innerHTML;
    let cantidadActualInt = parseInt(cantidadActual);
    if (cantidadActual <10) {
         document.getElementById("cantidadElementos").innerHTML = cantidadActualInt + 1;
    }else{
         document.getElementById("cantidadElementos").innerHTML = cantidadActualInt;
    }
    cacularTotal();
    infoProducto();
}

function disminuirPedido() {
    let disminuir =document.getElementById('cantidadElementos').innerHTML;
    let disminuirInt = parseInt(1);
    if (disminuir > 0) {
        document.getElementById("cantidadElementos").innerHTML = disminuir - disminuirInt;
    }else{
    document.getElementById("cantidadElementos").innerHTML = disminuir;
   }
   cacularTotal();
   infoProducto();
}


function cacularTotal(){
    let valorUnidad = document.getElementById('valorUnitario').innerHTML;
    let cantidadElementos = document.getElementById('cantidadElementos').innerHTML;
    let costoTotalProductos = valorUnidad * cantidadElementos;
    document.getElementById('costoTotal').innerHTML = costoTotalProductos;
}

function infoProducto(){
    let obtenerCantidadProducto = document.getElementById("cantidadElementos").innerHTML;
    document.getElementById('Producto').innerHTML = obtenerCantidadProducto;
    if(obtenerCantidadProducto === 1){
        document.getElementById('productodos').innerHTML = "cantidadProducto";
    }else{
        document.getElementById('productodos').innerHTML = "cantidadProducto";
    }
}

