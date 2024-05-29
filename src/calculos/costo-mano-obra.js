import { LitElement, html, css } from 'lit';

class EmployeeForm extends LitElement {
    static properties = {
    employeeCount: { type: Number },
    totalSalary: { type: Number }
    };

    static styles = css`
    .employee {
        margin-bottom: 10px;
    }
    label {
        display: block;
        margin-top: 5px;
    }
    `;

    constructor() {
    super();
    this.employeeCount = 1;
    this.totalSalary = 0;
    }

    addEmployee() {
    this.employeeCount += 1;
    this.requestUpdate();
    }

    calculateSalary(event) {
    event.preventDefault();
    let totalSalary = 0;
    for (let i = 1; i <= this.employeeCount; i++) {
        const salary = this.shadowRoot.getElementById(`salary${i}`).value;
        const hours = this.shadowRoot.getElementById(`hours${i}`).value;
      totalSalary += parseFloat(salary) * parseFloat(hours);
    }
    this.totalSalary = totalSalary;
    }

    render() {
    return html`
        <h1>Calculadora de Costos de Producción</h1>
        <form @submit="${this.calculateSalary}">
        ${Array.from({ length: this.employeeCount }, (_, i) => i + 1).map((index) => html`
            <div class="employee">
            <label for="salary${index}">Salario por hora del empleado ${index}:</label>
            <input type="number" id="salary${index}" name="salary${index}" required>
            <label for="hours${index}">Horas trabajadas por el empleado ${index}:</label>
            <input type="number" id="hours${index}" name="hours${index}" required>
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
