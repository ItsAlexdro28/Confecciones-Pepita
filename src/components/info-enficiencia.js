import { LitElement, html, css } from 'lit';

class eficiencieTable extends LitElement {
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
    this.eficiencies = JSON.parse(localStorage.getItem('eficiencies')) || [];
  }

  render() {
    return html`
    <div class="tabla">
      <h2>Datos de Eficiencia</h2>
      <table>
        <tr>
          <th>Cantidad de productos terminados</th>
          <th>Horas totales de producion</th>
          <th>Costos Operativos</th>
          <th>Numero Productos defectuosos</th>
          <th>Produtividad</th>
          <th>Costo operativo por unidad</th>
          <th>Tasa de defectos</th>
          <th>Producion efectiva</th>
          <th>Eficiencia Operativa</th>
        </tr>
        ${this.eficiencies.map(eficiencie => html`
          <tr>
            <td>${eficiencie.finishedProducts}</td>
            <td>${eficiencie.workingHours}</td>
            <td>${eficiencie.workingCost}</td>
            <td>${eficiencie.brokenProducts}</td>
            <td>${eficiencie.productivity}</td>
            <td>${eficiencie.costPerUnit}</td>
            <td>${eficiencie.brokenRate}</td>
            <td>${eficiencie.efectiveProduction}</td>
            <td>${eficiencie.operativeEficiency}</td>
          </tr>
        `)}
      </table>
    </div>
    `;
  }
}

customElements.define('eficiencie-table', eficiencieTable);

