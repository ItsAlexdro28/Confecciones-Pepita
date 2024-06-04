
import { LitElement, html, css } from 'lit';

class BatcheTable extends LitElement {
  static styles = css`
    .tabla {
      margin-top: 250px;
      margin-left: 300px;
      display: block;
      font-family: Arial, sans-serif;
      max-width: 1500px;
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
        margin-left: 50px;
        width: 1200px;
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
        margin-left:10px;
        width:370px;
      }
  `;

  constructor() {
    super();
    this.batches = JSON.parse(localStorage.getItem('batches')) || [];
  }

  render() {
    return html`
      <div class="tabla">
        <h2>Datos por lote</h2>
        <table>
          ${this.batches.map(batche => html`
            <tr>
              <th>Productos terminados</th>
              <td>${batche.finishedProducts}</td>
            </tr>
            <tr>
              <th>Cantidad Materiales</th>
              <td>${batche.materialQuantity.map(cost => html`${cost}<br>`)}</td>
            </tr>
            <tr>
              <th>Precio Materiales</th>
              <td>${batche.materialPrice.map(cost => html`${cost}<br>`)}</td>
            </tr>
            <tr>
              <th>Horas de trabajo</th>
              <td>${batche.directWorkingHours}</td>
            </tr>
            <tr>
              <th>Precio por hora</th>
              <td>${batche.directHourlyWage}</td>
            </tr>
            <tr>
              <th>Base asignacion</th>
              <td>${batche.assignationBasis}</td>
            </tr>
            <tr>
              <th>Costo total materiales</th>
              <td>${batche.priceMaterialCosts}</td>
            </tr>
            <tr>
              <th>Costo Horas trabajo</th>
              <td>${batche.priceWorkers}</td>
            </tr>
            <tr>
              <th>Tasa de asignacion</th>
              <td>${batche.indirectRate}</td>
            </tr>
            <tr>
              <th>Costo indirecto por lote</th>
              <td>${batche.priceIndirectBatch}</td>
            </tr>
            <tr>
              <th>Costo total producion lote</th>
              <td>${batche.totalBatchPrice}</td>
            </tr>
          `)}
        </table>
      </div>
    `;
  }
}

customElements.define('batche-table', BatcheTable);


