function iniciarJuego(){
    quitarImagen();
    /*mostrarPregunta();*/
}

//---------QUITAR IMAGEN-------------
function quitarImagen(){
    var legendContenedor= document.getElementById('legend-contenedor');
    var imagen = document.getElementById("miImagen");
    if(legendContenedor){
    legendContenedor.innerHTML = "&#127808;  Mucha Suerte  &#127808;"; // habria que ver la forma de aumentar solo el tamaño del unicode
    legendContenedor.style.backgroundImage =`url("../styles/imagenes/cielo.avif")`;
                 //legendContenedor.style.background = "#1e4df6"; //---FUNCIONA PERFECTO----
    legendContenedor.style.border = "1px solid #65af30";
    legendContenedor.style.color = "#bbff77";
    legendContenedor.style.boxShadow = " 0 -1px 1px 1px #bbe99a,0 -2px 2px 2px #65af30";
                //imagen.style.display = "none"; funciona perfecto asi sola sin diley
    setTimeout(function ocultarImagen(){ /*funcion anonima reutilizable*/
                 //imagen.remove() Otra posivilidad para que desaparesca*/
    imagen.style.display = "none";
             }, 250); // Desaparece la imagen con diley INDEPENDIENTE DEL CAMBIO DE LEGEND
                // HAY Q HACER Q DESAPARESCA CON EFECTO ESPIRAL-REDUCIENDOSE HACIA EL CENTRO Y AL FINALIZAR UN DESTELLO
               //hacer que se aclare la imagen a medida que completa las preguntas, desapareciendo con destello en la ultima
                document.getElementById('formulario').style.display='block';
                document.getElementById('extremoFormulario').style.display='block';
      }
}

//---------------FUNCION CARGAR NUBE Y PREGUNTAS---------------------
let preguntaActual = 1;

function mostrarPregunta(numPregunta) { //hace que todos los de clase pregunta-conteiner no se vean
      // Ocultar todas las preguntas
  document.querySelectorAll('.pregunta-container').forEach(function(elemento) {
  elemento.style.display = 'none';
      });
// Mostrar la pregunta actual
      document.getElementById('pregunta' + numPregunta).style.display = 'block';
}
const totalPreguntas=5;
function siguientePregunta(numPregunta,idRespuesta) {
  let respuesta=document.getElementById(idRespuesta).value;
  // Guardar la respuesta en el contenedor correspondiente
  document.getElementById('respuesta' + numPregunta + '-container').innerHTML =  respuesta;
  // Avanzar a la siguiente pregunta
  if(numPregunta < totalPreguntas){
     preguntaActual = numPregunta+1;
     mostrarPregunta(preguntaActual);
    }
  else if(numPregunta==totalPreguntas){    //deberia ocultar la nube pero ASI NO FUNCIONA 
      document.getElementById('.pregunta-container').style.display = 'none'; 
      document.getElementById('extremoFormulario').style.display = 'none';
      }
}
mostrarPregunta(preguntaActual);

//-----------RECARGAR PAGINA CON RESET------------
var reset=document.getElementById("reset");
reset.addEventListener('click',function() {
  location.reload();
});

//-----------FUNCION CANTIDAD DE INTENTOS DISPONIBLES Y RESTANTES---------
function jugar(){
  agregarNumero();
  realizarIntento();
  generarNumeroAleatorio();
}
//-----------------------------------------------------------------

const intentosMaximos=document.getElementById('respuesta2-container').value; 
let intDisponibles=intentosMaximos;
//--------------------FUNCION MOSTRAR INTENTOS-------------------------

function mostrarIntentos(){
  document.getElementById('intentos-realizados').textContent = `${intRealizados}`;
  document.getElementById('intentosDisponibles').textContent = `${intDisponibles}`;
}
//------------FUNCION CONTADORA DE INTENTOS----------------------

function realizarIntento(){
  if(intDisponibles > 0){
    intRealizados++;
    intDisponibles--;
    mostrarIntentos();
  }
  else if(intDisponibles==0){
    findelJuego();
   }
}

//------------------MOSTRAR NUMEROS ELEGIDOS----------------------------
let numerosElegidos = [];

function agregarNumero() {
  const numeroIngresado = document.getElementById('input').value;
  numerosElegidos.push(Number(numeroIngresado));
  mostrarNumerosElegidos();
  document.getElementById('input').value = '';// deja vacio el input
}
               //---muestra los numeros en el sitio especificado(numeros-elegidos)
function mostrarNumerosElegidos() {
  const numerosElegidosElement = document.getElementById('numeros-elegidos');
  numerosElegidosElement.textContent = `${numerosElegidos.join(' ')}`;
}

//-----------FUNCION NUMERO ALEATORIO (AZAR)------------
const valorMinimo=document.getElementById('respuesta3-container').value;
const valorMaximo=document.getElementById('respuesta4-container').value;
const numeroAleatorio = generarNumeroAleatorio(valorMinimo,valorMaximo);

function generarNumeroAleatorio(minimo, maximo) {
// Generar número aleatorio
let numeroAleatorio = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;

// Mostrar el número aleatorio en la consola
console.log("Número aleatorio generado:", numeroAleatorio);
}




//----------------FUNCIONES DE VALIDACION-------------------


          //-------validar Mayor y Menor--------------
//const valorMinimo=document.getElementById('respuesta3-container').value;
//const valorMaximo=document.getElementById('respuesta4-container').value;

function validarMenoryMayor(){
if (valorMinimo >= valorMaximo) {
  mostrarMensajeError(formularioElement, 'El valor mínimo no puede ser mayor que el valor máximo.');
  return null;
}
  mostrarIntentos();
}

  //--------validar que el numero ingresado esta dentro de los parametros----
const numeroIngresado=document.getElementById('input').value;
  function numeroIngresadoOk(){
    if (numeroIngresado < minimo || numeroIngresado > maximo) {
      mostrarMensajeError(formularioElement, 'El numero que eligas debe estar dentro del parametro que especificaste .');
    }
    //return numeroIngresado;
    else {
      checkAcierto();
     } //---deberia llamar a la funcion de chequear acierto para saber si es correcto
    }
//----------CHECK NUMERO INGRESADO Y AZAR--------------

function checkAcierto(){
  if (numeroIngresado==numeroAleatorio){
    ganadora();
  }
  if(numeroIngresado !==numeroAleatorio && intDisponibles==0){
    let numeroAzar=document.getElementById('mayorMenor');
    numeroAzar.innerHTML=('<strong>El numero a adivinar era</strong><br>'+numeroAleatorio);
    findelJuego();
  }
  else{
    mostrarMensajeError(formularioElement,'No era ese numero<br>Has perdido un intento');
  }
}






////-------validar Nombre-------------- LA VALIDACION NO FUNCIONA COMO DEBIERA
                            //Aparece indistintamente de lo que ingrese el usuario

 const valorNombre=document.getElementById('respuesta1-container').value;

function validarNombre(valorNombre) {
  // Referencia al elemento 'formulario'
  const formularioElement = document.getElementById('formulario');

  // Verificar si el nombre no está vacío
  if (!valorNombre.trim()) {
    mostrarMensajeError(formularioElement, 'Dime, buen amigo, ¿cómo te llamas?');
    return false;
  }
  // Verificar si el nombre es una cadena de texto
  if (typeof valorNombre !== 'string') {
    mostrarMensajeError(formularioElement, 'No entiendo lo que me dices');
    return false;
  }
  // Verificar si el nombre tiene menos de 12 caracteres
  if (valorNombre.length >= 12) {
    mostrarMensajeError(formularioElement, 'Que nombre tan largo. Dime uno más corto.');
    return false;
  }
  // La validación ha pasado todas las condiciones
  return true;
}


// Función auxiliar para mostrar mensajes de error
function mostrarMensajeError(formulario, mensaje) {
  formulario.style.display = 'block';
  document.getElementById('extremoFormulario').style.display = 'block';
  formulario.innerHTML = mensaje;
}



//----------FUNCION FIN DEL JUEGO---------------

function findelJuego(){
  var fin=document.getElementById('fieldset');
  fin.style.backgroundImage=`url=../styles/videos/perdio.webp"`;
  mostrarMensajeError(formularioElement, 'Se acabaron los intentos<br>Vuelve a intentarlo');
  setTimeout(()=>{
    mostrarMensajeError(formularioElement, 'El numero a adivinar era '+numeroAleatorio);
  },2000);
  
}

//---------FUNCION GANÓ------------------------

function ganadora(){
input.disabled=true; //deberia desabilitar el input para ingresar intentos
var gano=document.getElementById('fieldset');
gano.style.background='url=../styles/videos/riendo.gif'
mostrarMensajeError(formularioElement,'GANASTE !!!')
setTimeout(()=>{
  mostrarMensajeError(formularioElement, 'Lo hiciste en '+intRealizados +' intentos.');
},2000);
}                                 // revisar que expresion es correcta ${intRealizados}



