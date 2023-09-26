alert("Es un usuario nuevo, por favor registrese")

let nombre = prompt("Ingresa tu nombre en la siguiente barra");
let password = prompt("Ingrese su contraseña");
let mail = prompt ("Compartenos tu mail para comunicarnos contigo");
       
alert("Bienvenido " + nombre + "! A nuestra tienda," + "\nTu correo es: " + mail + "\n Y tu contraseña será: " + password );
    console.log("Ingreso de datos exitoso");



const nam = nombre;
const contra = password;

console.log(nam);
console.log(contra);

function validarDatos(){
    let user = prompt("Ingrese su nombre registrado");
    let pass = prompt("Ingrese su contraseña para validarlo");

    if (user != nam || pass != contra){
        alert("El usuario o contraseña es incorrecto");
    }else {
        alert("Bienvenido " + nombre);
        
        interaccionDeCompra();
        console.log("La interaccion de compra se ejecuto correctamente")
    }
}

validarDatos();
console.log("se valido el dato");


function interaccionDeCompra(){
    let compra = confirm("Desea comprar alguna prenda?");

    switch(compra){
        case true:
            iniciarCarrito();
            console.log("Se iniciara el carrito")
            break;
        case false:
            alert("Entonces vuelva pronto");
            console.log("No se va a iniciar el carrito")
            break;    
    }
}


function iniciarCarrito(){

    let lista = "";
    let finalizar_carrito = false;
    
    while (!finalizar_carrito){

        let codigo = prompt("Ingrese codigo de producto");
        let producto = aniadirAlCarrito(codigo);

        if (producto){
            console.log("Se agrego: " + producto + " al carrito");
            lista += "\n" + producto;
        }else{
            if (codigo === null){
                finalizar_carrito = true;
            }else{
                alert("Ingrese un codigo de producto valido");
            }
        }
    }
    if (lista != ""){
        let resp = confirm ("Esta seguro que quiere comprar las siguientes prendas?:"+lista);
        if (resp){
            alert("Gracias por su compra");
        }
    }
}