// import { isBoolean, isNumber, isString, creerEntierValide, creerEntierValideMinMax } from "../support";

let cout_ticket = document.getElementById('inputprixticket') as HTMLInputElement;
let paiement = document.getElementById('inputpaiement') as HTMLInputElement;
let erreurE = document.getElementById('erreurrendu') as HTMLElement;

export function eventrendu(){

    cout_ticket.onchange = function(e:Event){
        e.preventDefault();
        definirRendu();

    }
    paiement.onchange = function(e:Event){
        e.preventDefault();
        definirRendu();
    } 

    
}

function definirRendu(){
    let ticket:number, paiement_cl:number;
    ticket = cout_ticket.valueAsNumber;
    paiement_cl = paiement.valueAsNumber;
    if(!isNaN(ticket) && !isNaN(paiement_cl)){
        if(paiement_cl >= ticket){
            console.log('faire le rendu');
            erreurE.classList.add('d-none');
        } else {
            erreurRendu(`Il manque ${(paiement_cl - ticket).toFixed(2)} €`);
            console.log('Heu kine problem');
        }
    } else {
        erreurRendu(`Il y a un problème avec le prix du ticket (${ticket}) ou le paiement du client (${paiement_cl})`);
        console.log('faire le rendu');
    }
}

function erreurRendu( texteErreur:string){
    
    let texte = document.getElementById('texteErreurRendu') as HTMLElement;

    erreurE.classList.remove('d-none');
    texte.innerText = texteErreur;
}