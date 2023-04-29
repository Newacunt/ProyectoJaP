//Listado de los videojuegos donde se detalla el nombre, año de lanzamiento y precio del mismo
let videojuegos = [
    {
        nombre_juego: "Cuphead",
        Anio: 2017,
        precio: 429
    },
    {
        nombre_juego: "Blasphemous",
        Anio: 2019,
        precio: 529
    },
    {
        nombre_juego: "Soma",
        Anio: 2015,
        precio: 829
    },
    {
        nombre_juego: "Omega Strikers",
        Anio: 2022,
        precio: 10
    },
    {
        nombre_juego: "Undertale",
        Anio: 2015,
        precio: 229
    },
    {
        nombre_juego: "Stardew Valley",
        Anio: 2016,
        precio: 329
    },
    {
        nombre_juego: "LoL",
        Anio: 2009,
        precio: 5
    },
    {
        nombre_juego: "Age of Empires 2",
        Anio: 1999,
        precio: 129
    },
    {
        nombre_juego: "Doom",
        Anio: 1993,
        precio: 29
    },
    {
        nombre_juego: "Dark Souls",
        Anio: 2011,
        precio: 1899
    }]

//En esta variable se ejecuta un prompt, que permite al usuario elegir una de las opciones indicadas
var preguntita = prompt("Que desea ver? Escriba el numero correspondiente \n1.Nombre y Fecha \n2.Nombre y Precio")

//En esta condicional se va a ejecutar solamente los nombres de los nombres y fecha de los juegos.
if (preguntita === "1") {
    //Se utiliza el forEach para recorrer la lista de videojuegos
    videojuegos.forEach(function (juego) {
        const { nombre_juego, Anio } = juego
        console.log("El juego se llama: " + nombre_juego + " y su fecha de lanzamiento fue en: " + Anio)
    })
}

//En esta condicional solo se ejecuta el nombre y el precio del videojuego
else if (preguntita === "2") {
    videojuegos.forEach(function (juego) {
        const { nombre_juego, precio } = juego
        console.log("Nombre del juego: " + nombre_juego + " y su precio es de $" + precio)
    })

//En caso de que ninguna de las respuestas sean las indicadas se ejecuta el siguiente string
}
else {
    alert("Gracias, Hasta la proxima")
}