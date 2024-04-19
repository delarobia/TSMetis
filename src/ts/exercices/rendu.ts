// import { isBoolean, isNumber, isString, creerEntierValide, creerEntierValideMinMax } from "../support";

let cout_ticket = document.getElementById('inputprixticket') as HTMLInputElement;
let paiement = document.getElementById('inputpaiement') as HTMLInputElement;
let erreurE = document.getElementById('erreurrendu') as HTMLElement;
let blocrendu = document.getElementById('blocrendu') as HTMLElement;

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
        if(paiement_cl >= ticket ){
            // Afficher et masquer les blocs
            erreurE.classList.add('d-none');
            blocrendu.classList.remove('d-none');

            // Razles inputs
            let inputcinquante = document.getElementById('cinquanteeuro') as HTMLInputElement;
            let inputvingt = document.getElementById('vingteuro') as HTMLInputElement;
            let inputdix = document.getElementById('dixeuro') as HTMLInputElement;
            let inputcinq = document.getElementById('cinqeuro') as HTMLInputElement;
            let inputdeux = document.getElementById('deuxeuro') as HTMLInputElement;
            let inputun = document.getElementById('uneuro') as HTMLInputElement;
            inputcinquante.value= '0';
            inputvingt.value= '0';
            inputdix.value= '0';
            inputcinq.value= '0';
            inputdeux.value= '0';
            inputun.value = '0';

            // Remplir les imputs
            let rendu = paiement_cl - ticket;
            let rendubis = rendu;
            if ((rendubis/50) >= 1){
                inputcinquante.value = (Math.floor(rendubis / 50)).toFixed(0);
                rendubis %= 50; 
            }
            if ((rendubis/20) >= 1){
                inputvingt.value = (Math.floor(rendubis / 20)).toFixed(0);
                rendubis %= 20; 
            }
            if ((rendubis/10) >= 1){
                inputdix.value = (Math.floor(rendubis / 10)).toFixed(0);
                rendubis %= 10; 
            }
            if ((rendubis/5) >= 1){
                
                inputcinq.value = (Math.floor(rendubis / 5)).toFixed(0);
                rendubis %= 5; 
            }
            if ((rendubis/2) >= 1){
                
                inputdeux.value = (Math.floor(rendubis / 2)).toFixed(0);
                rendubis %= 2; 
            }
            if ((rendubis/1) >= 1){
                inputun.value = (Math.floor(rendubis / 1)).toFixed(0);
                rendubis %= 1; 
            }



        } else if(ticket == paiement_cl) {
            erreurRendu(`Votre ticket est réglé`, 'bg-primary-subtle');
        } else {
            erreurRendu(`Il manque ${(paiement_cl - ticket).toFixed(2)} €`, 'bg-danger-subtle');
        }
    } else {
        erreurRendu(`Il y a un problème avec le prix du ticket (${isNaN(ticket)?'Non défini':'Autre : '+ ticket}) ou le paiement du client (${isNaN(paiement_cl)?'Non défini':'Autre : '+ paiement_cl})`, 'bg-danger-subtle');
        
    }
}

function erreurRendu(texteErreur:string, couleurErreur:string){
    let texte = document.getElementById('texteErreurRendu') as HTMLElement;
    let couleur = document.getElementById('couleurErreurRendu') as HTMLElement;

    // Afficher et masquer les blocs 
    erreurE.classList.remove('d-none');
    blocrendu.classList.add('d-none');

    // Couleur du bloc 
    couleur.classList.remove('bg-primary-subtle', 'bg-danger-subtle');
    couleur.classList.add(couleurErreur);

    // Texte du bloc
    texte.innerText = texteErreur;
}