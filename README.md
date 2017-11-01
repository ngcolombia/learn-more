# Aprendamos Binding en Angular :hatching_chick:

Se ve muy bien, no? :sunglasses: Pero un poco aburrido :thumbsdown: vamos a agregarle un poco de swag haciendo que aparezca una imagen aleatoria cada segundo.

## 7. Dividamos la URL :scissors:
Para formar urls diferentes cada que necesitemos una nueva imagen, vamos a dividir nuestra ruta en 2 variables:
- baseUrl: Le asignaremos la primer parte de la ruta -> https://api.adorable.io/avatars/500/
- urlSuffix: Le asignaremos la última parte de la ruta -> @adorable.io.png

## 9. Obtener imagen random :rice_scene:
Ahora, vamos a crear una función que retorne la ruta completa de la imagen.
```ts
  generateRandomFace() {
    this.imageUrl = `${this.baseUrl}$300${this.urlSuffix}`
  }
```

Observa que la variable imageUrl ahora la utilizamos para concatenar la url de la imagen. Tu tarea es cambiar el 300 por una función que genere un número aleatorio.

## 10. Cambiando cada segundo :alarm_clock:
En el método constructor del componente vamos a indicarle que nos genere una imagen aleatoria cada segundo. 
*Pista: Utilizar el método setInterval()*

Has terminado? Felicitaciones :clap: :clap: :clap:



