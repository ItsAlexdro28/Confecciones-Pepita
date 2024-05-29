import { LitElement, html, css } from 'lit';

export class MaterialForm extends LitElement {
static properties = {
    materials: { type: Array },
    currentMaterial: { type: Object }
};

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
    h2 {
    text-align: center;
    color: #333;
    }
    .material {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    }
    label {
    font-weight: bold;
    margin-top: 10px;
    color: black;
    }
    input[type="number"], input[type="text"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    margin-top: 5px;
    width: calc(100% - 22px);
    }
    button {
    background-color: #007BFF;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 10px;
    }
    button:hover {
    background-color: #0056b3;
    }
    .buttons {
    display: flex;
    justify-content: space-between;
    }
`;

constructor() {
    super();
    this.materials = [];
    this.currentMaterial = { name: '', price: '', supplier: '', quantity: '' };
    this.loadFromLocalStorage();
}

loadFromLocalStorage() {
    const storedMaterials = JSON.parse(localStorage.getItem('materials')) || [];
    this.materials = storedMaterials;
}

saveToLocalStorage() {
    localStorage.setItem('materials', JSON.stringify(this.materials));
}

addMaterial() {
    if (this.currentMaterial.name && this.currentMaterial.price && this.currentMaterial.supplier && this.currentMaterial.quantity) {
    this.materials.push(this.currentMaterial);
    this.currentMaterial = { name: '', price: '', supplier: '', quantity: '' };
    this.requestUpdate();
    this.saveToLocalStorage();
    } else {
    alert("Por favor, complete los campos de la materia prima antes de agregar una nueva.");
    }
}

updateMaterial(field, value) {
    this.currentMaterial = { ...this.currentMaterial, [field]: value };
}

render() {
    return html`
    <h2>Materias Primas</h2>
    <div class="material">
        <label for="materialName">Nombre de la materia prima:</label>
        <input type="text" id="materialName" name="materialName" .value="${this.currentMaterial.name}" @input="${e => this.updateMaterial('name', e.target.value)}" required>
        <label for="materialPrice">Precio de la materia prima:</label>
        <input type="number" id="materialPrice" name="materialPrice" .value="${this.currentMaterial.price}" @input="${e => this.updateMaterial('price', e.target.value)}" required>
        <label for="materialSupplier">Proveedor de la materia prima:</label>
        <input type="text" id="materialSupplier" name="materialSupplier" .value="${this.currentMaterial.supplier}" @input="${e => this.updateMaterial('supplier', e.target.value)}" required>
        <label for="materialQuantity">Cantidad disponible:</label>
        <input type="number" id="materialQuantity" name="materialQuantity" .value="${this.currentMaterial.quantity}" @input="${e => this.updateMaterial('quantity', e.target.value)}" required>
    </div>
    <div class="buttons">
        <button type="button" @click="${this.addMaterial}">Agregar materia prima</button>
    </div>
    `;
}
}

customElements.define('material-form', MaterialForm);