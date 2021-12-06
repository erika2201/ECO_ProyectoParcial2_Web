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
        cant.innerHTML = "$" + this.ahorro.cant;

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

        // ELEMENTOS EXTRA
        // subtitulo cantidad
        let subTitle_cant1 = document.createElement("h5");
        subTitle_cant1.className = "txt_subTitle_cant1";
        subTitle_cant1.innerHTML = "Cantidad"

        // subtitulo cantidad
        let subTitle_cant2 = document.createElement("h5");
        subTitle_cant2.className = "txt_subTitle_cant2";
        subTitle_cant2.innerHTML = "a ahorrar"

        // subtitulo fecha
        let subTitle_date = document.createElement("h5");
        subTitle_date.className = "txt_subTitle_date";
        subTitle_date.innerHTML = "Fecha meta";

        // subtitulo frequencia
        let subTitle_freq = document.createElement("h5");
        subTitle_freq.className = "txt_subTitle_freq";
        subTitle_freq.innerHTML = "Frecuencia";


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
        comp.appendChild(subTitle_cant1);
        comp.appendChild(subTitle_cant2);
        comp.appendChild(subTitle_date);
        comp.appendChild(subTitle_freq);

        // Botones
        comp.appendChild(verMas);

        return comp;
    }
}   