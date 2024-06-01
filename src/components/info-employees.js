import { LitElement,html,css } from "lit";


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
        background-color: #c2fdefe8 ;
        color: grey;
      }
    `;
  
    constructor() {
      super();
      this.employees = JSON.parse(localStorage.getItem('employees')) || [];
    }
  
    render() {
      return html`
      <div class ="tabla">
        <h2>Costos de Mano de Obra</h2>
        <table>
          <tr>
            <th>Nombre</th>
            <th>Salario por Hora</th>
            <th>Horas Trabajadas</th>
            <th>Beneficios</th>
            <th>Costos Indirectos</th>
            <th>Total Salario</th>
          </tr>
          ${this.employees.map(employee => html`
            <tr>
              <td>${employee.name}</td>
              <td>${employee.hourlyWage}</td>
              <td>${employee.hoursWorked}</td>
              <td>${employee.benefits}</td>
              <td>${employee.overheads}</td>
              <td>${employee.totalSalary.toFixed(2)}</td>
            </tr>
          `)}
        </table>
        </div>
      `;
      
    }
  }
  customElements.define('info-table', LaborCostTable);
  