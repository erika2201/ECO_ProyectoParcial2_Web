import { getDatabase, ref, set} from "@firebase/database";

export class ahorroComp{
    constructor(ahorro){
        this.ahorro = ahorro;
    }

    render(){
        // Componente Padre
        let comp = document.createElement("div");
        comp.className = "comp_padre";

        // Nombre
        let comp_name = document.createElement("h3");
        comp_name.className = "comp_name";

        // Cantidad

        // Fecha

        // Frecuencia
    }
}   