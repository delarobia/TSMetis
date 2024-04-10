import { isNumber } from "../support.js";


export default function zorglub() {
    let radiohomme = document.getElementById("radiosexehomme") as HTMLInputElement;
    let radiofemme = document.getElementById("radiosexefemme") as HTMLInputElement;
    let inputAge = document.getElementById("inputAge") as HTMLInputElement;
    let btnSubZorglub = document.getElementById("btn_sub_zorglub") as HTMLElement;
    let btnRepZorglub = document.getElementById("btn_rep_zorglub") as HTMLElement;

    if (btnSubZorglub != null) {
        btnSubZorglub.onclick = function (e) {
            e.preventDefault();
            let age = parseInt(inputAge.value);
            let couleur: string;
            if (isNumber(age)) {
                let sexe = false; // true = homme / false = femme
                let message = "";
                btnRepZorglub.classList.remove('btn-primary', 'btn-success', 'btn-danger')
                if (radiofemme.checked) {
                    sexe = false;
                } else if (radiohomme.checked) {
                    sexe = true;
                }
                if (sexe) {
                    if (age >= 20) {
                        message = "Imposable";
                        couleur = "btn-danger";
                    } else {
                        message = "Non imposable";
                        couleur = "btn-success";
                    }
                } else {
                    if (age >= 18 && age <= 35) {
                        message = "Imposable";
                        couleur = "btn-danger";
                    } else {
                        message = "Non imposable";
                        couleur = "btn-success";
                    }
                }
                btnRepZorglub.innerText = message;
                btnRepZorglub.classList.add(couleur)
                btnRepZorglub.style.display = 'block';
            }
        }
    }
}

