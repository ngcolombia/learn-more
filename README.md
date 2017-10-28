
Vamos a crear una variable llamada 'imageUrl' en el archivo app.component.ts y le vamos a asignar la ruta que tenemos en el atributo src de la imagen

```js
private imageUrl = 'https://api.adorable.io/avatars/500/';
``` 

El atributo src de la imagen lo cambiaremos por el property binding [src] y le asignaremos la variable que acabamos de crear

```html
<img class="random-face" [src]="imageUrl" alt="">
```

link a a la siguiente rama.


