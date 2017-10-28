Explicar api de imagenes

Vamos a reemplazar el contenido del app.component.html por la etiqueta que va a contener nuestra imagen
```html
<img class="random-face" src="https://api.adorable.io/avatars/500/300@adorable.io.png">
```

Agregaremos un poco de estilo a nuestra imagen con la clase "random-face", para esto, añadimos al archivo app.component.css las siguientes lineas
```css
.random-face {
  height: 90vh;
  margin: 1rem;
  border-radius: 50%;
}
```

El archivo styles.css contiene los estilos globales de nuestra app, le vamos a añadir las siguientes lineas 
```css
body {
  background-color: black;
  margin: 0;
  text-align: center;
}
```

Ahora puedes ir a tu navegador y ver el resultado :)

link a a la siguiente rama.


