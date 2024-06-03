import { LitElement, html, css } from 'lit';

class TablaCostosIndirectos extends LitElement {
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
    this.indirectCosts = JSON.parse(localStorage.getItem('indirectCosts')) || [];
  }

  render() {
    return html`
      <h2>Costos Indirectos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Valor (USD)</th>
          </tr>
        </thead>
        <tbody>
          ${this.indirectCosts.map(cost => html`
            <tr>
              <td>${cost.name}</td>
              <td>${cost.description}</td>
              <td>${cost.value}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}

customElements.define('tabla-costos-indirectos', TablaCostosIndirectos);

