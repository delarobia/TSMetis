// Function support

export function genererValeurMinMax(min : number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function creerEntierValide(){
    let nombre: any, okNombre = false;
    while (!okNombre) {
        nombre = prompt("Veuillez saisir un nombre entier positif");
        nombre = parseInt(nombre);
        if (isNaN(nombre) || nombre < 0){
            alert("Veuillez indiquer un nombre entier positif");
        } else {
            okNombre = true;
        }
    }
    return nombre;
}

export function creerEntierValideMinMax(textePrompt:string, texteErreur:string, min:number, max:number){
    let nombre:any, okNombre:boolean = false;
    if (textePrompt === undefined) {
        throw new Error ("Please define a prompt for valid input")
    }
    if (texteErreur === undefined) {
        texteErreur = textePrompt;
    }
    while (!okNombre) {
        nombre = prompt(textePrompt);
        nombre = parseInt(nombre);
        if (isNaN(nombre) || nombre < min || nombre > max){
            alert(texteErreur);
        } else {
            okNombre = true;
        }
    }
    return nombre;
}


// Fonctions support
/**
 * Fonction to test if something is a string
 * @param {*} something 
 * @returns True if the parameter is a string false otherwise
 */
export function isString(something:any) {
    if (typeof something === 'string' || something instanceof String) {
        return true;
    }
    return false
}

/**
 * Fonction to test if something is a number
 * @param {*} something 
 * @returns True if the parameter is a number false otherwise
 */
export function isNumber(something:any){
    if(typeof something === 'number' || something instanceof Number){
        return true;
    }
    return false;
}

/**
 * Fonction to test if something is a boolean
 * @param {*} something 
 * @returns True if the parameter is a boolean false otherwise
 */
export function isBoolean(something:any){
    if(typeof something === 'boolean' || something instanceof Boolean){
        return true;
    }
    return false;
}