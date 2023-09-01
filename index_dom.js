
import {scroll} from "./dom/boton_scroll.js"


const d=document;

//este evento nos va a permitir que nuestra funcion se ejecute a la carga del documento.
d.addEventListener("DOMContentLoaded",(e)=>{
    scroll(".scroll-top-btn");

});
