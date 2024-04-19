interface timecode{
    heure: number,
    minute: number,
    seconde: number
}
export function ajoutUneSeconde() {
    let inputHeure = document.getElementById('inputHeure') as HTMLInputElement;
    let inputMinutes = document.getElementById('inputMinutes') as HTMLInputElement;
    let inputSecondes = document.getElementById('inputSecondes') as HTMLInputElement;
    let spAffichage = document.getElementById('heuredansuneseconde') as HTMLElement;
    let oH:timecode = {heure: 0, minute: 0, seconde:0};

    let heures:number = 0;
    let minutes: number = 0;
    let secondes: number = 0;

    inputHeure.oninput = function (e: Event) {
        e.preventDefault();
        heures = !isNaN(inputHeure.valueAsNumber) ? inputHeure.valueAsNumber : 24;
        oH = calculSeconde(heures, minutes, secondes);
        spAffichage.textContent = message(oH);
    }
    inputMinutes.oninput = function (e: Event) {
        e.preventDefault();
        minutes = !isNaN(inputMinutes.valueAsNumber) ? inputMinutes.valueAsNumber : 60;
        oH = calculSeconde(heures, minutes, secondes);
        spAffichage.textContent = message(oH);
    }
    inputSecondes.oninput = function (e: Event) {
        e.preventDefault();
        secondes = !isNaN(inputSecondes.valueAsNumber) ? inputSecondes.valueAsNumber : 60;
        oH = calculSeconde(heures, minutes, secondes);
        spAffichage.textContent = message(oH);
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

function message(Oh:timecode):string{
    return `${Oh.heure} heure${Oh.heure>1?'s':''}, ${Oh.minute} minute${Oh.minute>1?'s':''} et ${Oh.seconde} seconde${Oh.seconde>1?'s':''}`
}