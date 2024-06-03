import { LitElement, html, css } from 'lit';

class CostosIndirectos extends LitElement {
  static styles = css`
  .formulario {
    position: absolute;
    top: 220px;
    left: 320px;
    display: block;
    font-family: Arial, sans-serif;
    width: 1200px;
    padding: 20px;
    background-color: #c2fdefe8;
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
    this.indirectCosts = {
      rent: { description: '', value: '' },
      utilities: { description: '', value: '' },
      maintenance: { description: '', value: '' },
      ppe: { description: '', value: '' },
      training: { description: '', value: '' },
      insurance: { description: '', value: '' },
      officeExpenses: { description: '', value: '' },
      transport: { description: '', value: '' },
      licenses: { description: '', value: '' },
      cleaning: { description: '', value: '' },
    };
  }

  handleChange(e, category, field) {
    this.indirectCosts[category][field] = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('indirectCosts', JSON.stringify(this.indirectCosts));
    let sum = this.sumIndirectCosts(this.indirectCosts);
    localStorage.setItem('totalIndirect', JSON.stringify(sum));
    alert('Los costos indirectos han sido guardados.');
  }

  sumIndirectCosts(indirectCosts) {
      let total = 0;
      for (let key in indirectCosts) {
          if (indirectCosts.hasOwnProperty(key)) {
              total += parseInt(indirectCosts[key].value, 10);
          }
      }
      return total;
  }
  render() {
    return html`
    <div class="formulario">
      <h2>Formulario de Costos Indirectos</h2>
      <p class="warning">Completa unicamente los campos necesarios</p>
      <form @submit="${this.handleSubmit}">
        ${Object.keys(this.indirectCosts).map(category => html`
          <label for="${category}-description">${this.getLabel(category)} Descripción:</label>
          <textarea id="${category}-description" @input="${e => this.handleChange(e, category, 'description')}" placeholder="Descripción"></textarea>

          <label for="${category}-value">${this.getLabel(category)} Valor:</label>
          <input type="number" id="${category}-value" @input="${e => this.handleChange(e, category, 'value')}" placeholder="Valor en USD">
        `)}
        <button type="submit">Guardar Costos Indirectos</button>
      </form>
      </div>
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

customElements.define('costos-indirectos-form', CostosIndirectos);

