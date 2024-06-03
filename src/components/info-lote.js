import { LitElement, html, css } from 'lit';

class batcheTable extends LitElement {
  static styles = css`
    .tabla {
      margin-top:250px;
      margin-left:300px;
  
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
      background-color: #c2fdefe8 ;
      color: grey;
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
        <tr>
          <th>Productos terminados</th>
          <th>Cantidad Materiales</th>
          <th>Precio Materiales</th>
          <th>Horas de trabajo</th>
          <th>Precio por hora</th>
          <th>Base asignacion</th>
          <th>Costo total materiales</th>
          <th>Costo Horas trabajo</th>
          <th>Tasa de asignacion</th>
          <th>Costo indirecto por lote</th>
          <th>Costo total producion lote</th>
        </tr>
        ${this.batches.map(batche => html`
          <tr>
            <td>${batche.finishedProducts}</td>
            <td>${batche.materialQuantity.map(cost => html`${cost}<br>`)}</td>
            <td>${batche.materialPrice.map(cost => html`${cost}<br>`)}</td>
            <td>${batche.directWorkingHours}</td>
            <td>${batche.directHourlyWage}</td>
            <td>${batche.assignationBasis}</td>
            <td>${batche.priceMaterialCosts}</td>
            <td>${batche.priceWorkers}</td>
            <td>${batche.indirectRate}</td>
            <td>${batche.priceIndirectBatch}</td>
            <td>${batche.totalBatchPrice}</td>
          </tr>
        `)}
      </table>
    </div>
    `;
  }
}

customElements.define('batch-table', batcheTable);

