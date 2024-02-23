//quitarImagen(); sacando esta funciona perfecto 
//pedirParametros(); llamando a esta funcion no se carga la pagina y arranca con las preguntas

//-----------CANVAS---------------
// document.addEventListener("DOMContentLoaded", function() {
//     // Código para inicializar el canvas y dibujar sobre él
//     var canvas = document.getElementById("canvas");
//     var ctx = canvas.getContext("2d");
//    //hasta aca para llamar al canvas

   
//    // Dibujar el texto en el canvas utilizando JavaScript
//    var mensaje = "Hola viajero, dime tu nombre";

// //    //obtener metricas
// //    var metrics = ctx.measureText(mensaje);
// //    var cuadroAncho = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
// //     var cuadroAlto = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
// //    // Establecer las dimensiones del canvas según las métricas del texto
// //    canvas.width = cuadroAncho;
// //    canvas.height = cuadroAlto;
   
// //    // Configurar el estilo del texto
//       ctx.font = "30px serif";
//      ctx.fillStyle = "white";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";

//     // Dibujar el texto en el canvas
//    ctx.fillText(mensaje, canvas.width / 2, canvas.height / 2);
// });
//---------------------------------------

//-----DEBERIA SERVIR PARA QUE UN SUCESO NO SE REPITA----------------

// var sucesoRepetido = false; // Variable de control para verificar si el suceso se ha repetido

// function manejarSuceso() {
//     if (!sucesoRepetido) {
//         var frase = document.getElementById('frase1');
//         frase.innerHTML += '<br>Ingrese caracteres válidos'; // Agregar nueva línea
//         frase.style.color = "red";
//         frase.style.fontStyle = "oblique";
//         frase.style.fontWeight = "bold";
        
//         sucesoRepetido = true; // Marcar el suceso como repetido para evitar agregar más líneas
//     }
// }

// // Ejemplo de cómo puedes llamar a la función manejarSuceso en respuesta a algún evento
// manejarSuceso();


//------------------------------------------------------------------------------------

//     
//         window.onload = function() { // hace q se borre la linea inicial de frase
//             document.getElementById('frase').innerHTML = '';
//         cargarNombre();}