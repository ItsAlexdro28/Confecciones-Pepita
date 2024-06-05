import { productos } from './produccion-inventario.js'; 
import { LitElement, html, css } from 'lit';

class productionTable extends LitElement {
  static styles = css`
    .tabla {
      margin-top: 250px;
      margin-left: 300px;
      display: block;
      font-family: Arial, sans-serif;
      max-width: 1200px;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      padding: 10px;
      border: 1px solid #ccc;
      text-align: left;
    }
    th {
      background-color: #c2fdefe8;
      color: grey;
    }

    @media (min-width: 1000px) and (max-width: 1400px) {
      .tabla {
        margin-top: 180px;
        margin-left: 100px;
        width: 1100px;
      }
    }
    @media (min-width: 620px) and (max-width: 999px) {
      .tabla {
        margin-top: 120px;
        margin-left: 20px;
        width: 600px;
      }

      table {
        display: flex;
        flex-direction: column;
      }

      tr {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
      }

      th, td {
        width: 50%;
      }
    }
    @media(max-width:619px){
      .tabla {
        margin-top:100px;
        margin-left:45px;
        width:370px;
      }
    }
    @media(max-width:500px){
      .formulario {
        margin-top:120px;
        margin-left:0px;
        width:320px;
      }
    }
  `;

  constructor() {
    super();
    this.production = JSON.parse(localStorage.getItem('production')) || [];
  }

  render() {
    return html`
      <div class="tabla">
        <h2>Datos de Producion</h2>
        <table>
          ${this.production.map(eficiencie => html`
            <tr>
              <th>Nombre del producto</th>
              <td>${eficiencie.index}</td>
            </tr>
            <tr>
              <th>Cantidad de productos</th>
              <td>${eficiencie.quantity}</td>
            </tr>
            <tr>
              <th>Talla</th>
              <td>${eficiencie.size}</td>
            </tr>
            <tr>
              <th>Horas de trbajo por producto</th>
              <td>${eficiencie.hoursPerItem}</td>
            </tr>
            <tr>
              <th>Materia prima</th>
              <td>${eficiencie.material}</td>
            </tr>
            <tr>
              <th>Costo Total</th>
              <td>${eficiencie.totalCost}</td>
            </tr>
          `)}
        </table>
      </div>
    `;
  }
}

customElements.define('production-table', productionTable);

