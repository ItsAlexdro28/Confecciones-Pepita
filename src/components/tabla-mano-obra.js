import { LitElement, html, css } from 'lit';

class TablaManoDeObra extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
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
      background-color: #007BFF;
      color: #fff;
    }
  `;

  constructor() {
    super();
    this.employees = JSON.parse(localStorage.getItem('employees')) || [];
  }

  render() {
    return html`
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
    `;
  }
}

customElements.define('tabla-mano-obra', TablaManoDeObra);