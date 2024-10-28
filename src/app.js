/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const palos = [
    '<i class="fa-solid fa-heart"></i>',
    '<i class="fa-solid fa-clover"></i>',
    '<i class="fa-solid fa-spa"></i>',
    '<i class="fa-solid fa-diamond"></i>'
  ];

  // Función para generar una carta aleatoria
  function generarCarta() {
    const valor = valores[Math.floor(Math.random() * valores.length)];
    const palo = palos[Math.floor(Math.random() * palos.length)];

    document.getElementById("valor").innerHTML = valor;
    document.getElementById("palo").innerHTML = palo;
  }

  generarCarta();
};
