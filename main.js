//Variables
let iconos = [];
let cantidadTarjetas = 24;

generarTablero();

function cargarIconos() {
  iconos = [
    '<i class="fa-solid fa-chess-rook"></i>',
    '<i class="fa-solid fa-chess-pawn"></i>',
    '<i class="fa-solid fa-chess"></i>',
    '<i class="fa-solid fa-ghost"></i>',
    '<i class="fa-solid fa-gamepad"></i>',
    '<i class="fa-solid fa-puzzle-piece"></i>',
    '<i class="fa-solid fa-hat-wizard"></i>',
    '<i class="fa-solid fa-dice-six"></i>',
    '<i class="fa-solid fa-heart"></i>',
    '<i class="fa-solid fa-book-skull"></i>',
    '<i class="fa-solid fa-car"></i>',
    '<i class="fa-solid fa-trash"></i>',
  ];
}

function generarTablero() {
  cargarIconos();
  let tablero = document.getElementById("tablero");
  let tarjetas = [];

  for (let i = 0; i < cantidadTarjetas; i++) {
    tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara Superior">
                    <i class="fa-sharp fa-regular fa-circle-question"></i>
                </div>  
            </div>
        </div>
        `);
    if (i % 2 == 1) {
      iconos.splice(0, 1);
    }

    tarjetas.sort(() => Math.random() - 0.5);
  }
  tablero.innerHTML = tarjetas.join(" ");
}

let selecciones = [];

function seleccionarTarjeta(i) {
  let tarjeta = document.getElementById("tarjeta" + i);

  if (tarjeta.style.transform != "rotateY(180deg)") {
    tarjeta.style.transform = "rotateY(180deg)";
    selecciones.push(i);
  }

  if (selecciones.length == 2) {
    deseleccionar(selecciones);
    selecciones = [];
  }
}


function deseleccionar(selecciones) {
  setTimeout(() => {
    let trasera1 = document.getElementById("trasera" + selecciones[0]);
    let trasera2 = document.getElementById("trasera" + selecciones[1]);

    if (trasera1.innerHTML != trasera2.innerHTML) {
      let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
      let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
      tarjeta1.style.transform = "rotateY(0deg)";
      tarjeta2.style.transform = "rotateY(0deg)";
    } else {
        trasera1.style.background = "#FAFAFA";
        trasera2.style.background = "#FAFAFA";
    }
  }, 1000);
}
