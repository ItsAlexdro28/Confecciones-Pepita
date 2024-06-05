import { LitElement, html, css } from 'lit';

class EficiencyForm extends LitElement {
  static styles = css`
    .formulario {
      margin-top:220px;
      margin-left:500px;
      display: block;
      font-family: Arial, sans-serif;
      width: 800px;
      padding: 20px;
      background-color: #c2fdefe8;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h2 {
      text-align: center;
      color: #333;
    }
    form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
    label {
      margin-bottom: 5px;
      font-weight: bold;
      color: black;
    }
    input, button {
      padding: 10px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      width: 250px;
      box-shadow: inset 000px 0px 0px 0px #e28daa;
      -webkit-transition: all 0.6s cubic-bezier(.9, .24, .40, 1);
      transition: all 0.4s cubic-bezier(.9, .24, .40, 1);
      background-color: #d4759a;
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
        margin-top:180px;
        margin-left:250px;
        width:800px;
      }
    }
    @media(min-width:620px) and (max-width:999px){
      .formulario {
        margin-top:120px;
        margin-left:50px;
        width:600px;
      }
    }
    @media(max-width:619px){
      .formulario {
        margin-top:120px;
        margin-left:45px;
        width:380px;
      }
    }
    @media(max-width:500px){
      .formulario {
        margin-top:120px;
        margin-left:0px;
        width:320px;
      }
    }
    .popup {
      display: none;
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #4CAF50;
      color: white;
      padding: 16px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      z-index: 1000;
    }
    .popup.show {
      display: block;
    }
  `;

  constructor() {
    super();
    this.currentEficiency = { finishedProducts: 0, workingHours: 0, brokenProducts: 0 };
    this.productivity = 0;
    this.costPerUnit = 0;
    this.brokenRate = 0;
    this.efectiveProduction = 0;
    this.operativeEficiency = 0;
  }

  updateEficiency(event) {
    const { name, value } = event.target;
    this.currentEficiency = { ...this.currentEficiency, [name]: value };
  }

  costWorkingLabour() {
    let indirect = JSON.parse(localStorage.getItem('totalIndirect'));
    let salary = JSON.parse(localStorage.getItem('totalCost'));
    return (Number(indirect) + Number(salary));
  }

  calculateTotalEficiency() {
    const { finishedProducts, workingHours, brokenProducts } = this.currentEficiency;

    this.productivity = Number(finishedProducts) / Number(workingHours);
    let workingCost = this.costWorkingLabour();
    this.costPerUnit = workingCost / finishedProducts;
    this.brokenRate = brokenProducts / finishedProducts;
    this.efectiveProduction = finishedProducts - brokenProducts;
    this.operativeEficiency = this.efectiveProduction / workingCost;

    return { 'productivity': this.productivity, 'costPerUnit': this.costPerUnit, 'brokenRate': this.brokenRate, 'efectiveProduction': this.efectiveProduction, 'operativeEficiency': this.operativeEficiency, 'workingCost': workingCost };
  }

  addEficiency() {
    const totalCost = this.calculateTotalEficiency();
    const eficiencyData = {
      ...this.currentEficiency,
      ...totalCost
    };

    let eficiencies = JSON.parse(localStorage.getItem('eficiencies')) || [];
    eficiencies.push(eficiencyData);
    localStorage.setItem('eficiencies', JSON.stringify(eficiences));

    this.currentEficiency = { finishedProducts: 0, workingHours: 0, brokenProducts: 0 };

    // Show notification
    this.showNotification('Eficiencia registrada con éxito.');
  }

  showNotification(message) {
    const popup = this.shadowRoot.querySelector('.popup');
    popup.textContent = message;
    popup.classList.add('show');
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addEficiency();
  }

  render() {
    return html`
      <div class="formulario">
        <h2>Agregar datos para calcular la eficiencia operativa</h2>
        <form @submit="${this.handleSubmit}">
          <label>Cantidad de productos terminados</label>
          <input type="number" name="finishedProducts" .value="${this.currentEficiency.finishedProducts}" @input="${this.updateEficiency}" required>

          <label>Horas de trabajo</label>
          <input type="number" name="workingHours" .value="${this.currentEficiency.workingHours}" @input="${this.updateEficiency}" required>

          <label>Productos defectuosos</label>
          <input type="number" name="brokenProducts" .value="${this.currentEficiency.brokenProducts}" @input="${this.updateEficiency}" required>

          <button type="submit">Registrar</button>
        </form>
      </div>
      <div class="popup"></div>
    `;
  }
}

customElements.define('eficiency-form', EficiencyForm);





