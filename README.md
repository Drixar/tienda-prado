# Getting Started with Create React App

Este proyecto fue creado con [Create React App].

## Para clonar el proyecto:

En la terminal escribir:

### `git clone https://github.com/Drixar/tienda-prado.git`

## luego en la carpeta del proyecto ejecutar:

### `npm install`

Esto instalará las dependencias para que la aplicación se ejecute correctamente:

## Para iniciar el servicor en modo desarrollo:

En la carpeta del Proyecto, puede ejecutar:

### `npm start`

Corre la aplicación en modo desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para verlo en el nevegador.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

## http://localhost:3000/  `ejecuta el itemListContainer`
## http://localhost:3000/category/:categoryId'  `ejecuta el itemListContainer filtrado por categoría`

Siendo las opciones posibles para categoryId:
Infusiones
Vajilla
Accesorios

## http://localhost:3000/detail/productId  `ejecuta el itemDetailContainer`
Siendo productId el código de identificación del producto


## http://localhost:3000/cart  `ejecuta el Cart`
Siempre y cuando se hayan agregado elementos al carrito de compras.
En caso que el carrito de compras esté vacío, se `ejecuta el itemListContainer` 

## http://localhost:3000/checkout  `ejecuta el Checkout`
Presenta el formulario para que se completen los datos del comprador.
En caso que el carrito de compras esté vacío, se `ejecuta el itemListContainer` 

Cuando se presiona el Botón "Generar Orden", la Orden se Genra, se graba en la base de datos y le informa el códico al cliente por pantalla.