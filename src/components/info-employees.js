
import { LitElement, html, css } from 'lit';

class LaborCostTable extends LitElement {
  static styles = css`
    .tabla {
      margin-top: 400px;
      margin-left: 400px;
      display: block;
      font-family: Arial, sans-serif;
      max-width: 800px;
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
  `;

  constructor() {
    super();
    this.employees = JSON.parse(localStorage.getItem('employees')) || [];
  }

  render() {
    return html`
      <div class="tabla">
        <h2>Costos de Mano de Obra</h2>
        <table>
          ${this.employees.map(employee => html`
            <tr>
              <th>Nombre</th>
              <td>${employee.name}</td>
            </tr>
            <tr>
              <th>Salario por Hora</th>
              <td>${employee.hourlyWage}</td>
            </tr>
            <tr>
              <th>Horas Trabajadas</th>
              <td>${employee.hoursWorked}</td>
            </tr>
            <tr>
              <th>Beneficios</th>
              <td>${employee.benefits}</td>
            </tr>
            <tr>
              <th>Costos Indirectos</th>
              <td>${employee.overheads}</td>
            </tr>
            <tr>
              <th>Total Salario</th>
              <td>${employee.totalSalary.toFixed(2)}</td>
            </tr>
          `)}
        </table>
      </div>
    `;
  }
}

customElements.define('info-table', LaborCostTable);
