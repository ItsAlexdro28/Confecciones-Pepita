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
    this.indirectCosts = JSON.parse(localStorage.getItem('indirectCosts')) || {};
  }

  render() {
    return html`
      <h2>Costos Indirectos</h2>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Descripción</th>
            <th>Valor (USD)</th>
          </tr>
        </thead>
        <tbody>
          ${Object.keys(this.indirectCosts).map(category => html`
            <tr>
              <td>${this.getLabel(category)}</td>
              <td>${this.indirectCosts[category].description}</td>
              <td>${this.indirectCosts[category].value}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }

  getLabel(category) {
    const labels = {
      rent: 'Alquiler del Local',
      utilities: 'Servicios Públicos (Electricidad, Agua, Gas)',
      maintenance: 'Mantenimiento de Maquinaria',
      ppe: 'Equipo de Protección Personal (EPP)',
      training: 'Formación y Capacitación de Empleados',
      insurance: 'Seguros (Propiedad, Responsabilidad Civil, Salud)',
      officeExpenses: 'Gastos de Oficina',
      transport: 'Transporte y Logística',
      licenses: 'Costos de Licencias y Permisos',
      cleaning: 'Servicios de Limpieza',
    };
    return labels[category] || category;
  }
}

customElements.define('tabla-costos-indirectos', TablaCostosIndirectos);