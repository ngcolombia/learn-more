Vamos a crear la función que retorne una imagen aleatoria.
Primero necesitamos dividir la ruta...
Dado que el segundo parametro de la ruta nos indica que imagen nos va a mostrar, este debe ser generado de manera aletaoria, para lo cual dividiremos el nombre en dos variables diferente, la primera la llamaremos baseUrl y le asignaremos la ruta 'https://api.adorable.io/avatars/500/' y la otra variable será urlSuffix a la que le agregaremos el valor '@adorable.io.png'

Vamos a crear una función que nos retorne el numero aleatorio para la ruta, la llamaremos generateRandomFace
```js
this.imageUrl = `${this.baseUrl}300${this.urlSuffix}`
```
Tu tarea es cambiar el 300 por una función que genere un número aleatorio
Observa que creamos una nueva varible llamada imageUrl en la cual vamos a concatenar la ruta completa de la imagen
link a a la siguiente rama.


