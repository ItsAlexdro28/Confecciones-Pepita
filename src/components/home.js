import { LitElement, html, css } from 'lit';

class home extends LitElement{
    constructor() {
    super()
    }

    render(){
        return html `
        <styles>
            <link rel="stylesheet" href="/css/style.css"/>
        </styles>

        <div id="primeraPagina">
            <h2>¡Bienvenido a Gestor de informes de  ®Confecciones Pepita!</h2>
            <h3>Aquí podrás calcular y visualizar:</h3>
            <p></p>
            <div class="cuadros-container">
              <div class="cuadros">
                <img src="public/images/manoObra.jpg" class="cuadros-img">
                <p>Materia prima</p>
              </div>
              <div class="cuadros">
                <img src="public/images/estructura-costos.webp" class="cuadros-img">
                <p>Costos indirectos</p>
              </div>
              <div class="cuadros">
                <img src="public/images/tela.webp" class="cuadros-img">
                <p>Mano de obra</p>
              </div>
              <div class="cuadros">
                <img src="public/images/informes.jpg" class="cuadros-img">
                <p>Informes de producción</p>
              </div>
            </div>

            <h4>Dirígete a nuestro menú</h4>
            <img src="public/images/hacer-clic.png" class="click">
          </div>
        `   
    }
}

customElements.define('primera-pagina', home);
