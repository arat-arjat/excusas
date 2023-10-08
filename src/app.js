/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["El carpintero", "Mi socio", "mi jefe", "mi esposa"];
  let action = ["no entrego", "se enfermo", "hizo mal", "olvido"];
  let what = ["el auto", "mi trabajo", "la medida del objeto"];
  let when = [
    "esta mañana",
    "al salir del taller",
    "en la casa",
    "en el estacionamiento",
    "mientras iba de camino"
  ];

  let quien = who[Math.floor(Math.random() * who.length)];
  let accion = action[Math.floor(Math.random() * action.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let donde = when[Math.floor(Math.random() * when.length)];

  //let suma2 = quien + " " + accion + " " + que + " " + donde;

  let suma = `${quien} ${accion} ${que}  ${donde} `;

  let elemento = document.getElementById("excusasFalsas");
  elemento.innerText = suma;
};
