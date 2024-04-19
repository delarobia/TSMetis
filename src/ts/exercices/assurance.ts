export function assurance(){
    let inputAgeAssu = document.getElementById('inputAgeAssu') as HTMLInputElement;
    let inputPermis = document.getElementById('inputPermis') as HTMLInputElement;
    let inputAccident = document.getElementById('inputAccident') as HTMLInputElement;
    let inputFidel = document.getElementById('inputFidel') as HTMLInputElement;

    // * On FOCUS
    inputAgeAssu.onfocus = function(event){
        event.preventDefault;
        console.log('Focus Age')
    }
    inputPermis.onfocus = function(event){
        event.preventDefault;
        console.log('Focus Permis')
    }
    inputAccident.onfocus = function(event){
        event.preventDefault;
        console.log('Focus Accident')
    }
    inputFidel.onfocus = function(event){
        event.preventDefault;
        console.log('Focus Fidelité')
    }

    // * On BLUR
    inputAgeAssu.onblur = function(event){
        event.preventDefault;
        console.log('Blur Age')
    }
    inputPermis.onblur = function(event){
        event.preventDefault;
        console.log('Blur Permis')
    }
    inputAccident.onblur = function(event){
        event.preventDefault;
        console.log('Blur Accident')
    }
    inputFidel.onblur = function(event){
        event.preventDefault;
        console.log('Blur Fidélité')
    }

    // * On INPUT
    inputAgeAssu.oninput = function(event){
        event.preventDefault;
        console.log('Input Age')
    }
    inputPermis.oninput = function(event){
        event.preventDefault;
        console.log('Input Permis')
    }
    inputAccident.oninput = function(event){
        event.preventDefault;
        console.log('Input Accident')
    }
    inputFidel.oninput = function(event){
        event.preventDefault;
        console.log('Input Fidélité')
    }
}