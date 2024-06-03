import { LitElement, html, css } from 'lit';

class ManoDeObra extends LitElement {
  static styles = css`
    .formulario {
      margin-top:220px;
      margin-left:500px;
      display: block;
      font-family: Arial, sans-serif;
      width: 800px;
      padding: 20px;
      background-color: #c2fdefe8;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h2 {
      text-align: center;
      color: #333;
    }
    form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
    label {
      margin-bottom: 5px;
      font-weight: bold;
      color: black;
    }
    input, button {
      padding: 10px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      background-color: rgb(235, 127, 127);
      color: #fff;
      cursor: pointer;
      width:200px;
    }
    button:hover {
      background-color: #0056b3;
      font-size:20px
    }
  `;

  constructor() {
    super();
    this.currentEmployee = {hourlyWage: '', hoursWorked: '', benefits: ''};
    this.totalCost = 0;
  }

  updateEmployee(event) {
    const { name, value } = event.target;
    this.currentEmployee = { ...this.currentEmployee, [name]: value };
  }

  calculateTotalSalary() {
    const { hourlyWage, hoursWorked, benefits, overheads } = this.currentEmployee;
    return (parseFloat(hourlyWage) * parseFloat(hoursWorked)) + parseFloat(benefits);
  }

  addEmployee() {
    const totalSalary = this.calculateTotalSalary();
    const employeeData = {
      ...this.currentEmployee,
      totalSalary
    };

    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employeeData);
    localStorage.setItem('employees', JSON.stringify(employees));
    
    this.currentEmployee = {hourlyWage: '', hoursWorked: '', benefits: ''};
    this.calculateTotalCost();
  }

  calculateTotalCost() {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    this.totalCost = employees.reduce((acc, employee) => acc + employee.totalSalary, 0);
    localStorage.setItem('totalCost', JSON.stringify(this.totalCost));
  }

  render() {
    return html`
    <div class="formulario">
      <h2>Agregar Costo de Mano de Obra</h2>
      <form @submit="${this.handleSubmit}">
        <label>Salario por Hora</label>
        <input type="number" name="hourlyWage" .value="${this.currentEmployee.hourlyWage}" @input="${this.updateEmployee}" required>

        <label>Número de Horas Trabajadas</label>
        <input type="number" name="hoursWorked" .value="${this.currentEmployee.hoursWorked}" @input="${this.updateEmployee}" required>

        <label>Beneficios</label>
        <input type="number" name="benefits" .value="${this.currentEmployee.benefits}" @input="${this.updateEmployee}">

        <button type="button" @click="${this.addEmployee}">Registrar</button>
      </form>
      
    </div>
      `;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addEmployee();
  }
}

customElements.define('mano-obra-form', ManoDeObra);




