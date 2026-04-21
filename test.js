const tf = require("@tensorflow/tfjs"); // importamos tensorFlow la libreria de js para trabajar con tensores

console.log("version:", tf.version.tfjs); // mostramos la version de tensorFlow que estamos usando)

const tensorDePrueba = tf.tensor([1, 2, 3, 4]); // creamos un tensor de prueba con los valores 1, 2, 3 y 4
//mi tensor ahora es solo un contenedor de valores(numeros ahora). este tensor es de un rango 1 (seria de rango dos si fuera una matriz)

console.log("contenido del tensor:", tensorDePrueba); // mostramos el tensor de prueba que creamos
tensorDePrueba.print();

//la terminal muestra: shape: [4] que significa que mi tensor tiene 4 elementos de una sola fila
