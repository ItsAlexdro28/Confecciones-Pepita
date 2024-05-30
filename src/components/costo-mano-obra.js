import { LitElement, html, css } from 'lit';

export class EmployeeForm extends LitElement {
static properties = {
    employeeCount: { type: Number },
    totalSalary: { type: Number },
    totalBenefits: { type: Number },
    employees: { type: Array },
    currentEmployee: { type: Object },
    benefits: { type: Number },
    indirectCosts: { type: Number }
};

static styles = css`
    :host {
    display: block;
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h1 {
    text-align: center;
    color: #333;
    }
    .section {
    margin-bottom: 20px;
    }
    .section h2 {
    margin-top: 0;
    }
    .employee {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    }
    label {
    font-weight: bold;
    margin-top: 10px;
    color: black;
    }
    input[type="number"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    margin-top: 5px;
    width: calc(100% - 22px);
    }
    button {
    background-color: #007BFF;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 10px;
    }
    button:hover {
    background-color: #0056b3;
    }
    .buttons {
    display: flex;
    justify-content: space-between;
    }
    h2 {
    text-align: center;
    color: #333;
    margin-top: 20px;
    }
`;

constructor() {
    super();
    this.employeeCount = 1;
    this.totalSalary = 0;
    this.totalBenefits = 0;
    this.employees = [];
    this.currentEmployee = { salary: '', hours: '' };
    this.benefits = 0;
    this.loadFromLocalStorage();
}

loadFromLocalStorage() {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    const storedBenefits = parseFloat(localStorage.getItem('benefits')) || 0;
    if (storedEmployees) {
    this.employees = storedEmployees;
    this.benefits = storedBenefits;
    this.calculateSalary();
    }
}

saveToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
    localStorage.setItem('benefits', this.benefits);
}

addEmployee() {
    if (this.currentEmployee.salary && this.currentEmployee.hours) {
    this.employees.push(this.currentEmployee);
    this.currentEmployee = { salary: '', hours: '' };
    this.requestUpdate();
    this.saveToLocalStorage();
    } else {
    alert("Por favor, complete los campos del empleado actual antes de agregar uno nuevo.");
    }
}

updateEmployee(field, value) {
    this.currentEmployee = { ...this.currentEmployee, [field]: value };
}

updateBenefits(value) {
    this.benefits = parseFloat(value) || 0;
    this.saveToLocalStorage();
    this.calculateSalary();
}

updateIndirectCosts(value) {
    this.indirectCosts = parseFloat(value) || 0;
    this.saveToLocalStorage();
    this.calculateSalary();
}

calculateSalary(event) {
    if (event) event.preventDefault();
    let totalSalary = 0;
    for (let employee of this.employees) {
    const salary = parseFloat(employee.salary) || 0;
    const hours = parseFloat(employee.hours) || 0;
    totalSalary += salary * hours;
    }
    this.totalSalary = totalSalary + this.benefits;
}

render() {
    return html`
    <h1>Calculadora de Costos de Mano De Obra</h1>
    <form @submit="${this.calculateSalary}">
        <div class="section">
        <h2>Datos de los Empleados</h2>
        <div class="employee">
            <label for="salary">Salario por hora del empleado:</label>
            <input type="number" id="salary" name="salary" .value="${this.currentEmployee.salary}" @input="${e => this.updateEmployee('salary', e.target.value)}" required>
            <label for="hours">Horas trabajadas por el empleado:</label>
            <input type="number" id="hours" name="hours" .value="${this.currentEmployee.hours}" @input="${e => this.updateEmployee('hours', e.target.value)}" required>
        </div>
        <div class="buttons">
            <button type="button" @click="${this.addEmployee}">Agregar empleado</button>
        </div>
        </div>
        <div class="section">
        <h2>Beneficios y Prestaciones</h2>
        <label for="benefits">Monto total de beneficios y prestaciones:</label>
        <input type="number" id="benefits" name="benefits" .value="${this.benefits}" @input="${e => this.updateBenefits(e.target.value)}" required>
        </div>
        <div class="buttons">
        <button type="submit">Enviar</button>
        </div>
    </form>
    <h2>Salario Base Total: <span>${this.totalSalary.toFixed(2)}</span></h2>
    `;
}
}

customElements.define('employee-form', EmployeeForm);



