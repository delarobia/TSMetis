export function photocopier() {
    let inputphotocop = document.getElementById('inputphotocop') as HTMLInputElement;
    let affichephotocop = document.getElementById('affichePrix') as HTMLInputElement;

    inputphotocop.onchange = function (e) {
        e.preventDefault();
        
        let photocopies = parseInt(inputphotocop.value);
        if (!isNaN(photocopies)) {
            let prix :number|string;
            prix = 0;
            if (photocopies < 11) {
                prix = photocopies * 0.1;
            } else if (photocopies < 31) {
                prix = ((photocopies - 10) * 0.09) + 1;
            } else {
                prix = ((photocopies - 30) * 0.08) + 2.8;
            }
            prix = prix.toFixed(2);
            affichephotocop.value = `${prix} €`
        } else {
            affichephotocop.value = '';
        }
    }
}

