import {genererValeurMinMax} from "../support.js";

class ObjetsJP {
  // Propriétés
  nom: string;
  prix: number;
  cheminImage: string;
  altBalise: string;

  // Constructeur
  constructor(nom: string, prix: number, path: string, alt: string) {
    this.nom = nom;
    this.prix = prix;
    this.cheminImage = path;
    this.altBalise = alt;
  }
}

class JustePrix {
  listeObjets: Array<ObjetsJP>;

  constructor() {
    this.listeObjets = new Array();
  }

  ajoutObjet(objet: ObjetsJP): void;
  ajoutObjet(nom: string, prix: number, path: string, alt: string): void;
  ajoutObjet(
    arg1: unknown,
    arg2?: number,
    arg3?: string,
    arg4?: string
  ): void {
    if (arg1 instanceof ObjetsJP) {
      this.listeObjets.push(arg1);
    }
    if (typeof arg1 === "string") {
      console.log(
        `on construit l'objet avec ${arg1}, ${arg2}, ${arg3}, ${arg4}`
      );
      this.listeObjets.push(new ObjetsJP(arg1, arg2 || 0 , arg3 || "", arg4 || ""));
    }
  }
}

export function testJP() {
  let cleUsb = new ObjetsJP("Clé USB", 30, "../src/img/cleUsb.png", "Cle-Usb");

  let Jp = new JustePrix();
  Jp.ajoutObjet(cleUsb);
  Jp.ajoutObjet(
    "Bonnet de bain",
    6,
    "../src/img/Bonnet_bain.png",
    "bonnet-bain"
  );

  let imgJP = document.getElementById("imgJustePrix") as HTMLImageElement;
  let random:number = genererValeurMinMax(0,2);
  console.log(random);
  imgJP.src = Jp.listeObjets[random]?.cheminImage || "";
}

// let test = [
//   ["Bonnet de bain", 6, "../src/img/aspirateur.png", "bonnet-bain"],
//   "clé usb (30)",
//   "Aspirateur (90)",
//   "transat (65)",
//   "pneu (86)",
//   "Jouet en bois (99)",
//   "barbecue (403)",
//   "louis vuiton (889)",
//   "chaise de bureau (299)",
//   "guitare (185)",
//   "costume (15)",
// ];
