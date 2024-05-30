import { LitElement, html, css } from 'lit';

export class EmployeeForm extends LitElement {
static properties = {
    employeeCount: { type: Number },
    totalSalary: { type: Number },
    totalBenefits: { type: Number },
    totalIndirectCosts: { type: Number },
    employees: { type: Array },
    currentEmployee: { type: Object },
    benefits: { type: Number },
    indirectCosts: { type: Number }
};


constructor() {
    super();
    this.employeeCount = 1;
    this.totalSalary = 0;
    this.totalBenefits = 0;
    this.totalIndirectCosts = 0;
    this.employees = [];
    this.currentEmployee = { salary: '', hours: '' };
    this.benefits = 0;
    this.indirectCosts = 0;
    this.loadFromLocalStorage();
}

loadFromLocalStorage() {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    const storedBenefits = parseFloat(localStorage.getItem('benefits')) || 0;
    const storedIndirectCosts = parseFloat(localStorage.getItem('indirectCosts')) || 0;
    if (storedEmployees) {
    this.employees = storedEmployees;
    this.benefits = storedBenefits;
    this.indirectCosts = storedIndirectCosts;
    this.calculateSalary();
    }
}

saveToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
    localStorage.setItem('benefits', this.benefits);
    localStorage.setItem('indirectCosts', this.indirectCosts);
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
    this.totalSalary = totalSalary + this.benefits + this.indirectCosts;
}

render() {
    return html`
    <style>
        @import "/public/css/style.css";
      </style>
    <div class="formulario">
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
            <div class="section">
            <h2>Costos Indirectos</h2>
            <label for="indirectCosts">Monto total de costos indirectos:</label>
            <input type="number" id="indirectCosts" name="indirectCosts" .value="${this.indirectCosts}" @input="${e => this.updateIndirectCosts(e.target.value)}" required>
            </div>
            <div class="buttons">
            <button type="submit">Calcular</button>
            </div>
        </form>
        <h2>Salario Base Total: <span>${this.totalSalary.toLocaleString()}</span></h2>
    </div>
    `;
}
}

customElements.define('employee-form', EmployeeForm);



