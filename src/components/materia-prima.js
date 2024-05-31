import { LitElement, html, css } from 'lit';

class MaterialForm extends LitElement {
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
    input, select, button {
      padding: 10px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      background-color: #007BFF;
      color: #fff;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `;

  constructor() {
    super();
    this.currentMaterial = { name: '', description: '', category: '', supplier: '', price: '', unit: '', quantity: '', acquisitionDate: '', expirationDate: '', storageLocation: '', notes: '' };
  }

  updateMaterial(event) {
    const { name, value } = event.target;
    this.currentMaterial = { ...this.currentMaterial, [name]: value };
  }

  addMaterial() {
    let materials = JSON.parse(localStorage.getItem('materials')) || [];
    materials.push(this.currentMaterial);
    localStorage.setItem('materials', JSON.stringify(materials));
    this.currentMaterial = { name: '', description: '', category: '', supplier: '', price: '', unit: '', quantity: '', acquisitionDate: '', expirationDate: '', storageLocation: '', notes: '' };
  }

  render() {
    return html`
      <h2>Registrar y Gestionar Materia Prima</h2>
      <form @submit="${this.handleSubmit}">
        <label>Nombre</label>
        <input type="text" name="name" .value="${this.currentMaterial.name}" @input="${this.updateMaterial}" required>

        <label>Descripción</label>
        <input type="text" name="description" .value="${this.currentMaterial.description}" @input="${this.updateMaterial}">

        <label>Categoría</label>
        <select name="category" .value="${this.currentMaterial.category}" @input="${this.updateMaterial}">
          <option value="hilo">Hilo</option>
          <option value="botones">Botones</option>
          <option value="tela">Tela</option>
        </select>

        <label>Proveedor</label>
        <input type="text" name="supplier" .value="${this.currentMaterial.supplier}" @input="${this.updateMaterial}">

        <label>Precio por Unidad</label>
        <input type="number" step="0.01" name="price" .value="${this.currentMaterial.price}" @input="${this.updateMaterial}">

        <label>Unidad de Medida</label>
        <input type="text" name="unit" .value="${this.currentMaterial.unit}" @input="${this.updateMaterial}">

        <label>Cantidad en Stock</label>
        <input type="number" name="quantity" .value="${this.currentMaterial.quantity}" @input="${this.updateMaterial}">

        <label>Fecha de Adquisición</label>
        <input type="date" name="acquisitionDate" .value="${this.currentMaterial.acquisitionDate}" @input="${this.updateMaterial}">

        <label>Fecha de Vencimiento</label>
        <input type="date" name="expirationDate" .value="${this.currentMaterial.expirationDate}" @input="${this.updateMaterial}">

        <label>Ubicación en Almacén</label>
        <input type="text" name="storageLocation" .value="${this.currentMaterial.storageLocation}" @input="${this.updateMaterial}">

        <label>Notas</label>
        <input type="text" name="notes" .value="${this.currentMaterial.notes}" @input="${this.updateMaterial}">

        <button type="button" @click="${this.addMaterial}">Agregar Material</button>
      </form>
    `;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addMaterial();
  }
}

customElements.define('material-form', MaterialForm);


