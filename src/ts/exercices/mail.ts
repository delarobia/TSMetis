export function mail(){
    let mailVerif = document.getElementById('mailverif') as HTMLInputElement;

    mailVerif.oninput = function(){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let texteErreur = document.getElementById('textEmailVerif') as HTMLElement;

        if (mailVerif.value.length > 0){
            texteErreur.classList.remove('d-none');
            if(emailRegex.test(mailVerif.value)){
                texteErreur.innerText = "Mail valide";
                texteErreur.classList.remove('text-muted', 'text-danger');
                texteErreur.classList.add('text-success');
                mailVerif.classList.remove('is-invalid');
            } else {
                texteErreur.innerText = "Mail invalide";
                texteErreur.classList.remove('text-muted', 'text-success');
                texteErreur.classList.add('text-danger');
                mailVerif.classList.add('is-invalid');
            }
        } else {
            texteErreur.classList.add('d-none');
            mailVerif.classList.remove('is-invalid');
        }
    }
}

