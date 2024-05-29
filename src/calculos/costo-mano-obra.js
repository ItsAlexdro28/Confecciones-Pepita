import { LitElement, html, css } from 'lit';

export class EmployeeForm extends LitElement {
    static properties = {
    employeeCount: { type: Number },
    totalSalary: { type: Number },
    employees: { type: Array }
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
    .employee {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }   
    label {
        font-weight: bold;
        margin-top: 5px;
    }
    input[type="number"] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
        margin-top: 5px;
    }
    button {
        background-color: #007BFF;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 10px;
        font-size: 1em;
    }
    button:hover {
        background-color: #0056b3;
    }
    h2 {
        text-align: center;
        color: #333;
    }
    `;

    constructor() {
        super();
        this.employeeCount = 1;
        this.totalSalary = 0;
        this.employees = [];
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage() {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
        this.employees = storedEmployees;
        this.employeeCount = this.employees.length;
        this.calculateSalary();
    }
    }

    saveToLocalStorage() {
        localStorage.setItem('employees', JSON.stringify(this.employees));
    }

    addEmployee() {
        this.employeeCount += 1;
        this.employees.push({ salary: '', hours: '' });
        this.requestUpdate();
    }

    updateEmployee(index, field, value) {
        this.employees[index][field] = value;
        this.saveToLocalStorage();
    }

    calculateSalary(event) {
        if (event) event.preventDefault();
        let totalSalary = 0;
        for (let employee of this.employees) {
        const salary = parseFloat(employee.salary) || 0;
        const hours = parseFloat(employee.hours) || 0;
      totalSalary += salary * hours;
    }
    this.totalSalary = totalSalary;
    this.saveToLocalStorage();
    }

    render() {
        return html`
        <h1>Calculadora de Costos de Producción</h1>
        <form @submit="${this.calculateSalary}">
        ${this.employees.map((employee, index) => html`
            <div class="employee">
                <label for="salary${index}">Salario por hora del empleado ${index + 1}:</label>
                <input type="number" id="salary${index}" name="salary${index}" .value="${employee.salary}" @input="${e => this.updateEmployee(index, 'salary', e.target.value)}" required>
                <label for="hours${index}">Horas trabajadas por el empleado ${index + 1}:</label>
                <input type="number" id="hours${index}" name="hours${index}" .value="${employee.hours}" @input="${e => this.updateEmployee(index, 'hours', e.target.value)}" required>
            </div>
        `)}
        <button type="button" @click="${this.addEmployee}">Agregar empleado</button>
        <button type="submit">Calcular</button>
        </form>
        <h2>Salario Base Total: <span>${this.totalSalary.toFixed(2)}</span></h2>
    `;
    }
}

customElements.define('employee-form', EmployeeForm);

