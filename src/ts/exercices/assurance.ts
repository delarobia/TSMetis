// Inputs et  divs
let inputAgeAssu = document.getElementById("inputAgeAssu") as HTMLInputElement;
let inputPermisAssu = document.getElementById(
  "inputPermisAssu"
) as HTMLInputElement;
let inputAccidentAssu = document.getElementById(
  "inputAccidentAssu"
) as HTMLInputElement;
let inputFidelAssu = document.getElementById(
  "inputFidelAssu"
) as HTMLInputElement;
let msgAgeAssu = document.getElementById("msgAgeAssu") as HTMLElement;
let msgPermisAssu = document.getElementById("msgPermisAssu") as HTMLElement;
let msgAccidentAssu = document.getElementById("msgAccidentAssu") as HTMLElement;
let msgFidelAssu = document.getElementById("msgFidelAssu") as HTMLElement;

export function assurance() {
  // * On FOCUS
  inputAgeAssu.onfocus = function (event) {
    event.preventDefault;
    msgAgeAssu.classList.remove("d-none");
  };
  inputPermisAssu.onfocus = function (event) {
    event.preventDefault;
    msgPermisAssu.classList.remove("d-none");
  };
  inputAccidentAssu.onfocus = function (event) {
    event.preventDefault;
    msgAccidentAssu.classList.remove("d-none");
  };
  inputFidelAssu.onfocus = function (event) {
    event.preventDefault;
    msgFidelAssu.classList.remove("d-none");
  };

  // * On BLUR
  inputAgeAssu.onblur = function (event) {
    event.preventDefault;
    msgAgeAssu.classList.add("d-none");
  };
  inputPermisAssu.onblur = function (event) {
    event.preventDefault;
    msgPermisAssu.classList.add("d-none");
  };
  inputAccidentAssu.onblur = function (event) {
    event.preventDefault;
    msgAccidentAssu.classList.add("d-none");
  };
  inputFidelAssu.onblur = function (event) {
    event.preventDefault;
    msgFidelAssu.classList.add("d-none");
  };

  // * On INPUT
  inputAgeAssu.oninput = function (event) {
    event.preventDefault;
    // console.log("Input Age");
    calculPrime();
  };
  inputPermisAssu.oninput = function (event) {
    event.preventDefault;
    // console.log("Input Permis");
    calculPrime();
  };
  inputAccidentAssu.oninput = function (event) {
    event.preventDefault;
    // console.log("Input Accident");
    calculPrime();
  };
  inputFidelAssu.oninput = function (event) {
    event.preventDefault;
    // console.log("Input Fidélité");
    calculPrime();
  };
}

function calculPrime() {
  let resultAssu = document.getElementById("resultAssu") as HTMLElement;
  let texteMsg: string = "";
  let couleurMsg: string = "";
  let couleurBgMsg: string = "";
  let malus: number = 0;

  resultAssu.classList.remove(
    "bg-secondary",
    "text-white",
    "bg-primary",
    "bg-success",
    "text-black",
    "bg-warning",
    "bg-danger"
  );

  resultAssu.classList.add("d-none");

  if (
    inputAgeAssu.value.length > 0 &&
    inputPermisAssu.value.length > 0 &&
    inputAccidentAssu.value.length > 0 &&
    inputFidelAssu.value.length > 0
  ) {
    if (inputAgeAssu.valueAsNumber < 18) {
      malus = -1;
    } else if (inputAgeAssu.valueAsNumber < 25) {
      malus += 1;
    } else {
      if (inputPermisAssu.valueAsNumber < 2) {
        malus += 1;
      }
      malus += inputAccidentAssu.valueAsNumber;
      if (inputFidelAssu.valueAsNumber < 5) {
        malus += 1;
      }
    }

    switch (malus) {
      case -1:
        texteMsg = "Demandez à vos parents";
        couleurMsg = "text-white";
        couleurBgMsg = "bg-secondary";
        break;
      case 0:
        texteMsg = "Tarif Bleu";
        couleurMsg = "text-white";
        couleurBgMsg = "bg-primary";
        break;
      case 1:
        texteMsg = "Tarif Vert";
        couleurMsg = "text-white";
        couleurBgMsg = "bg-success";
        break;
      case 2:
        texteMsg = "Tarif Orange";
        couleurMsg = "text-black";
        couleurBgMsg = "bg-warning";
        break;
      case 3:
        texteMsg = "Tarif Rouge";
        couleurMsg = "text-white";
        couleurBgMsg = "bg-danger";
        break;
      default:
        texteMsg = "Impossible de vous assurer";
        couleurMsg = "text-white";
        couleurBgMsg = "bg-secondary";
        break;
    }

    resultAssu.innerText = texteMsg;
    resultAssu.classList.add(couleurBgMsg, couleurMsg);
    resultAssu.classList.remove("d-none");
  } else {
    resultAssu.classList.remove(
      "bg-secondary",
      "text-white",
      "bg-primary",
      "bg-success",
      "text-black",
      "bg-warning",
      "bg-danger"
    );

    resultAssu.classList.add("d-none");
  }
}
