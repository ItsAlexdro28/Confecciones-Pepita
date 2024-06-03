import { LitElement, html, css } from 'lit';
// import { costWorkingLabour } from '../calculos/mano-de-obra.js' WIP

class BatchForm extends LitElement {
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
      background-color: rgb(235, 127, 127);
      color: #fff;
      cursor: pointer;
      width:200px;
    }
    button:hover {
      background-color: #0056b3;
      font-size:20px
    }
    @media(min-width:1000px) and (max-width:1400px){
      .formulario {
        margin-top:180px;
        margin-left:250px;
        width:800px
      }
    }
    @media(min-width:620px) and (max-width:999px){
      .formulario {
        margin-top:120px;
        margin-left:50px;
        width:600px;
      }
    }
  
  `;

  constructor() {
    super();
    this.currentBatch = {finishedProducts: 0, materialQuantity: [], materialPrice: [], directWorkingHours: 0, directHourlyWage: 0, assignationBasis: 0};
    this.priceMaterialCosts = 0;
    this.priceWorkers = 0;
    this.indirectRate = 0;
    this.priceIndirectBatch = 0;
    this.totalBatchPrice = 0;
    this.allBatches = 0;
  }

  updateBatch(event) {
    const { name, value } = event.target;
    this.currentBatch = { ...this.currentBatch, [name]: value };
  }

  calculateTotalBatch() {
    const { finishedProducts, materialQuantity, materialPrice, directWorkingHours, directHourlyWage, assignationBasis } = this.currentBatch;
    for (let i = 0; i < materialQuantity.length; i++) {
      const quantity = Number(materialQuantity[i]);
      const price = Number(materialPrice[i]);
      console.log(price, quantity)
        this.priceMaterialCosts += quantity * price;
    }
    this.priceWorkers = directHourlyWage * directWorkingHours;
    //if (costWorkingLabour) {
    //  this.indirectRate = costWorkingLabour() / assignationBasis;
    //}
    //valor grande mientras unimos ramas
    this.indirectRate = 9999999999 / Number(assignationBasis);
    this.priceIndirectBatch = this.indirectRate * Number(finishedProducts);
    this.totalBatchPrice = this.priceMaterialCosts + this.priceWorkers + this.priceIndirectBatch;
    return { 'priceMaterialCosts': this.priceMaterialCosts, 'priceWorkers':this.priceWorkers, 'indirectRate': this.indirectRate, 'priceIndirectBatch': this.priceIndirectBatch, 'totalBatchPrice': this.totalBatchPrice}; 
  }

  updateBatch(event) {
      const { name, value } = event.target;
      this.currentBatch = { ...this.currentBatch, [name]: value };
    }

    updateMaterialQuantity(index, value) {
      this.currentBatch.materialQuantity[index] = value;
    }

    updateMaterialPrice(index, value) {
      this.currentBatch.materialPrice[index] = value;
    }

    addMaterialEntry() {
      this.currentBatch.materialQuantity.push('');
      this.currentBatch.materialPrice.push('');
      this.requestUpdate();
    }

    addBatch () {
      const totalCost = this.calculateTotalBatch();
      const batchData = {
        ...this.currentBatch,
        ...totalCost
      };

      let batches = JSON.parse(localStorage.getItem('batches')) || []; 
      batches.push(batchData);
      localStorage.setItem('batches', JSON.stringify(batches));

      this.currentBatch = {finishedProducts: 0, materialQuantity: [], materialPrice: [], directWorkingHours: 0, directHourlyWage: 0, assignationBasis: 0};
      this.calculateAllBatch();
    }

    calculateAllBatch() {
      let batches = JSON.parse(localStorage.getItem('batches')) || []; 
      this.allBatches = batches.reduce((acc, batch) => acc + batch.totalBatchPrice, 0);
      localStorage.setItem('totalBatchCost', JSON.stringify(this.allBatches));
    }

    renderMaterialInputs() {
      return this.currentBatch.materialQuantity.map((quantity, index) => html`
        <div>
          <label>Cantidad de Material ${index + 1}</label>
          <input type="number" .value="${quantity}" @input="${(e) => this.updateMaterialQuantity(index, e.target.value)}" required>
        </div>
        <div>
          <label>Precio por Material ${index + 1}</label>
          <input type="number" .value="${this.currentBatch.materialPrice[index]}" @input="${(e) => this.updateMaterialPrice(index, e.target.value)}" required>
        </div>
      `);
    }
    render() {
      return html`
      <div class="formulario">
        <h2>Agregar datos para calculo por lote</h2>
        <form @submit="${this.handleSubmit}">
          <label>Cantidad de productos</label>
          <input type="number" name="finishedProducts" .value="${this.currentBatch.finishedProducts}" @input="${this.updateBatch}" required>

          <!-- Render material inputs -->
          ${this.renderMaterialInputs()}
          <button type="button" @click="${this.addMaterialEntry}">Agregar Material</button>
      
          <label>Horas de mano de obra directa</label>
          <input type="number" name="directWorkingHours" .value="${this.currentBatch.directWorkingHours}" @input="${this.updateBatch}" required>

          <label>Salario por hora</label>
          <input type="number" name="directHourlyWage" .value="${this.currentBatch.directHourlyWage}" @input="${this.updateBatch}" required>

          <label>Base de asignacion (unidades producidas al mes)</label>
          <input type="number" name="assignationBasis" .value="${this.currentBatch.assignationBasis}" @input="${this.updateBatch}" required>

          <button type="button" @click="${this.addBatch}">Registrar</button>
        </form>
      
      </div>
        `;
    }

  handleSubmit(event) {
    event.preventDefault();
    this.addBatch();
  }
}


customElements.define('batch-form', BatchForm);



