
// Clase para los productos de la tienda online
class Producto {
    constructor(id, nombre, descripcion, colores, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion.toUpperCase();
        this.colores = colores;
        this.precio = precio;
    }   
}

//Array de Productos
const productos = [
    new Producto(1, "Remera sublimada", "Remera 100% algodòn con imagen sublimada ", "Azul-Lila-Blanca", 1500),
    new Producto(2, "Buzo oversize", "Buzo de algodòn con friza, amplio y muy calentito", "Azul-Negro-Blanco-Chocolate", 5000),
    new Producto(3, "Pantalòn recto de jean", "Pantalòn de jean con tiro alto y corte recto", "Celeste-Azul oscuro-Negro", 6800),
    new Producto(4, "Polera", "Polera de morley con cuello", "Negro-Beige-Crema-Lila", 2780),
];

//usamos el metodo map para listar los nombres de nuestros productos
const listaNombres = productos.map((producto) => producto.nombre);
alert('Productos disponibles en stock :'+ ' ' + listaNombres);

// Usamos for of para recorrer el array e iterar sobre el precio de cada producto 
for (const Precio of productos) {alert('El precio de cada producto es :' + ' ' + Precio.precio); }

//En este caso usamos for para recorrer el array de objetos, nos mostrara en consola cada uno. 
for (let index = 0; index < productos.length; index++) {
    console.log(productos[index]);
}
//usè for of para que nos muestre la descripcion de cada producto por consola
for (const description of productos) { console.log(description.descripcion); }

//Con reduce calculamos el valor total de la suma de todos los productos en el array
//use alert para mostrar al usuario el precio final 
const precioTotal = productos.reduce((ac, productos) => { return (ac += productos.precio); }, 0);
console.log(precioTotal);
alert("El total de tu compra es de : " + precioTotal);
alert("¡Muchas gracias por tu compra!");

//Aca mostramos por consola los productos que tienen menor valor a 3000, con el metodo filter. Y los que son de mayor valor a 3000. 
const menorValor = productos.filter((producto) => producto.precio < 3000);
console.log(menorValor);
const mayorValor = productos.filter ((producto) => producto.precio >3000); 
console.log(mayorValor);



