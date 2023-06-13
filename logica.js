//segunda pre entrega
//GENERADOR DE USUARIO
let usuarioNuevo = prompt('Ingrese su nombre');

while((usuarioNuevo == '')){
    alert('Ingrese un nombre🔒');
    usuarioNuevo = prompt('Ingrese su nombre');
}
console.log('Usuario: '+usuarioNuevo);
alert('Bienvenido '+usuarioNuevo+' a GAME BODY');


//FILTRO PRECIO
function filtrarPrecios(precio){
    const filtrados = productos.filter((pre)=>pre.precio <= precio);
    return filtrados;
}

//DEFINIR PRECIO
let precioDef = parseFloat(prompt('Ingresa el precio maximo que puedes abonar\n0 - Salir\n(Desde $7000 hasta $26000)'));

while(precioDef != 0){
    if(isNaN(precioDef) || precioDef < 0){
        alert('Ingrese un numero valido 😫');
    }else{
        //ya tenemos un numero valido
        const precioFiltrados = filtrarPrecios(precioDef);
        console.table(precioFiltrados);
    }
    precioDef = parseFloat(prompt('Ingresa el precio maximo que puedes abonar\n0 - Salir'));
}
