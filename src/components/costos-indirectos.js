import { LitElement, html, css } from 'lit';

class CostosIndirectos extends LitElement {
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
    form {
      display: flex;
      flex-direction: column;
    }
    label {
      margin: 10px 0 5px;
    }
    input, textarea, button {
      padding: 10px;
      margin: 5px 0 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    button {
      background-color: #007BFF;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `;

  constructor() {
    super();
    this.costName = '';
    this.description = '';
    this.value = '';
  }

  handleChange(e, field) {
    this[field] = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    const newCost = {
      name: this.costName,
      description: this.description,
      value: this.value,
    };

    let indirectCosts = JSON.parse(localStorage.getItem('indirectCosts')) || [];
    indirectCosts.push(newCost);
    localStorage.setItem('indirectCosts', JSON.stringify(indirectCosts));

    // Clear form fields
    this.costName = '';
    this.description = '';
    this.value = '';

    // Force update
    this.requestUpdate();
  }

  render() {
    return html`
      <h2>Formulario de Costos Indirectos</h2>
      <form @submit="${this.handleSubmit}">
        <label for="cost-name">Nombre del Costo:</label>
        <input type="text" id="cost-name" .value="${this.costName}" @input="${e => this.handleChange(e, 'costName')}" required>

        <label for="description">Descripción:</label>
        <textarea id="description" .value="${this.description}" @input="${e => this.handleChange(e, 'description')}" required></textarea>

        <label for="value">Valor:</label>
        <input type="number" id="value" .value="${this.value}" @input="${e => this.handleChange(e, 'value')}" required>

        <button type="submit">Guardar Costo Indirecto</button>
        <button type="button" @click="${this.clearForm}">Añadir Otro Costo Indirecto</button>
      </form>
    `;
  }

  clearForm() {
    this.costName = '';
    this.description = '';
    this.value = '';
    this.requestUpdate();
  }
}

customElements.define('costos-indirectos-form', CostosIndirectos);


