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
      width: 250px;
      box-shadow: inset 000px 0px 0px 0px #e28daa;
    -webkit-transition: all 0.6s cubic-bezier(.9, .24, .40, 1);
    transition: all 0.4s cubic-bezier(.9, .24, .40, 1);
    background-color: #d4759a;
    font-size:16px;
    }
  
    button::before {
        width: 250px;
        height: 0%;
        display: block;
        background: yellow;
        position: absolute;
        left: 0%;
        opacity: 0;
        top: 0;
        z-index: -1;
        -webkit-transition: height .2s cubic-bezier(0.9, 1, 0.32, 1), opacity .5s ease;
        transition: height .2s cubic-bezier(0.9, 1, 0.32, 1), opacity .5s ease;
      
    }
    
    button:hover::before {
        opacity: 1;
        background: yellow;
        height: 100%;
    }
    
    button:hover {
        box-shadow: inset 00px 100px 0px 0px #6098FF;
        color: #ecc375;
        background: #85a4e9;
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
        left:45px;
        width:380px;
      }
    }
    @media(max-width:500px){
      .formulario {
        top:120px;
        left:0px;
        width:320px;
      }
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
    console.log(indirectCosts)
    let totalIndirect = this.sumIndirectCosts(indirectCosts)
    localStorage.setItem('indirectCosts', JSON.stringify(indirectCosts));
    localStorage.setItem('totalIndirect', JSON.stringify(totalIndirect));
    
    // Clear form fields
    this.costName = '';
    this.description = '';
    this.value = '';

    // Force update
    this.requestUpdate();
  }
  sumIndirectCosts(indirectCosts) {
    let total = 0;
    for (let i = 0; i < indirectCosts.length; i++) {
        total += parseFloat(indirectCosts[i].value);
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

  clearForm() {
    this.costName = '';
    this.description = '';
    this.value = '';
    this.requestUpdate();
  }
}

customElements.define('costos-indirectos-form', CostosIndirectos);

