export class ahorroComp{
    constructor(ahorro){
        this.ahorro = ahorro;
    }

    render(){
        // ELEMENTOS
        // Componente Padre
        let comp = document.createElement("div");
        comp.className = "comp_padre";

        // Nombre
        let name = document.createElement("h3");
        name.className = "comp_name";
        name.innerHTML = this.ahorro.name;

        // Cantidad
        let cant = document.createElement("h5");
        cant.className = "comp_cant";
        cant.innerHTML = this.ahorro.cant;

        // Fecha
        let date = document.createElement("h5");
        date.className = "comp_date";
        date.innerHTML = this.ahorro.date;

        // Frecuencia
        let freq = document.createElement("h5");
        freq.className = "comp_freq";
        freq.innerHTML = this.ahorro.freq;

        // Progreso
        let progress = document.createElement("h4");
        progress.className = "comp_progress";
        progress.innerHTML = this.ahorro.progress;

        // Boton Ver Más
        let verMas = document.createElement('button');
        verMas.className = "comp_bn_verMas";
        verMas.innerHTML = "Ver mi progreso >>"


        // EVENTOS
        // Evento ir a página de gráficos
        verMas.addEventListener("click", (e, ev) => {
            window.location.href = "graphic.html"
        });


        // FINAL
        // Texto
        comp.appendChild(name);
        comp.appendChild(cant);
        comp.appendChild(date);
        comp.appendChild(freq);
        comp.appendChild(progress);

        // Botones
        comp.appendChild(verMas);

        return comp;
    }
}   