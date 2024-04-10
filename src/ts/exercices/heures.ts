
export function ajoutUneSeconde() {
    let inputHeure = document.getElementById('inputHeure') as HTMLInputElement;
    let inputMinutes = document.getElementById('inputMinutes') as HTMLInputElement;
    let inputSecondes = document.getElementById('inputSecondes') as HTMLInputElement;
    let spAffichage = document.getElementById('heuredansuneseconde') as HTMLElement;
    let oH = {heure: 0, minute: 0, seconde:0};

    let heures:number = 0;
    let minutes: number = 0;
    let secondes: number = 0;

    inputHeure.onchange = function (e: Event) {
        e.preventDefault();
        heures = !isNaN(inputHeure.valueAsNumber) ? inputHeure.valueAsNumber : 24;
        oH = calculSeconde(heures, minutes, secondes);
        spAffichage.textContent = `${oH.heure} heures, ${oH.minute} minutes et ${oH.seconde} secondes`
    }
    inputMinutes.onchange = function (e: Event) {
        e.preventDefault();
        minutes = !isNaN(inputMinutes.valueAsNumber) ? inputMinutes.valueAsNumber : 60;
        oH = calculSeconde(heures, minutes, secondes);
        spAffichage.textContent = `${oH.heure} heures, ${oH.minute} minutes et ${oH.seconde} secondes`
    }
    inputSecondes.onchange = function (e: Event) {
        e.preventDefault();
        secondes = !isNaN(inputSecondes.valueAsNumber) ? inputSecondes.valueAsNumber : 60;
        oH = calculSeconde(heures, minutes, secondes);
        spAffichage.textContent = `${oH.heure} heures, ${oH.minute} minutes et ${oH.seconde} secondes`
    }

    
}

function calculSeconde(h: number, m: number, s: number) {
    s++;
    if (s == 60) {
        m++;
        s = 0;
        if (m == 60) {
            h++;
            m = 0;
            if (h == 24) {
                h = 0;
            }
        }
    }
    return { heure: h, minute: m, seconde: s };
}