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
      background-color: rgb(235, 127, 127);
      color: #fff;
      cursor: pointer;
      width:280px;
    }
    button:hover {
      background-color: #0056b3;
      font-size:20px
    }
    @media(min-width:1000px) and (max-width:1400px){
      .formulario {
        top:180px;
        left:250px;
        width:800px
      }
    }
    @media(min-width:620px) and(max-width:999px){
      .formulario {
        top:120px;
        left:50px;
        width:600px;
      }
    }
    @media(max-width:619px){
      .formulario {
        top:120px;
        left:30px;
        width:380px;
      }
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

