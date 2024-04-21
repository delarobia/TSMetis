export function password(){
    let passwordVerif = document.getElementById('mdpverif') as HTMLInputElement;

    passwordVerif.oninput = function(){
        const regexMin = /[a-z]/;
        const regexMaj = /[A-Z]/;
        const regexNum = /[0-9]/;
        const regexSpe = /[!@#$%^&*()_+{}\[\]:;<>,.?/~`\\|\-=\'\"]/;
        let force:number = 0;

        let texteErreur = document.getElementById('textMdpVerif') as HTMLElement;

        

        if (passwordVerif.value.length > 0){
            texteErreur.classList.remove("text-danger", "text-warning", "text-primary", "text-success", "text-muted");
            texteErreur.classList.remove('d-none');
            if(regexMin.test(passwordVerif.value)){
                force++;
            }
            if(regexMaj.test(passwordVerif.value)){
                force++;
            }
            if(regexNum.test(passwordVerif.value)){
                force++;
            }
            if(regexSpe.test(passwordVerif.value)){
                force++;
            }
            if(passwordVerif.value.length < 12){
                force--;
            }

            let texteMsg: string = "Mot de passe ";
            let couleurMsg: string = "";
            switch(force){
                case 0 :
                case 1 :
                    texteMsg += "Dangereux";
                    couleurMsg = "text-danger"
                    break;
                case 2:
                    texteMsg += "Moyen";
                    couleurMsg = "text-warning"
                    break;
                case 3:
                    texteMsg += "Sécurisé";
                    couleurMsg = "text-primary"
                    break;
                case 4:
                    texteMsg += "Très sécurisé";
                    couleurMsg = "text-success"
                    break;
                default:
                    texteMsg = "Une erreur est survenue"
                    couleurMsg = "text-danger"
            }
            texteErreur.innerText = texteMsg;
            texteErreur.classList.add(couleurMsg);
        } else {
            texteErreur.classList.add('d-none');
            passwordVerif.classList.remove('is-invalid');
        }
    }
}