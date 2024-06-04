import { LitElement, html, css } from 'lit';

class MateriaPrima extends LitElement {
  static styles = css`
    .formulario {
      position: relative;
      margin-top: 220px;
      margin-left: 320px;
      display: block;
      font-family: Arial, sans-serif;
      width: 1200px;
      padding: 20px;
      background-color: #c2fdefe8;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .formulario2 {
      margin-top: 100px;
      margin-left: 20px;
      display: block;
      font-family: Arial, sans-serif;
      width: 600px;
      padding: 20px;
      background-color: #ebf7f4;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .formulario2 button {
      background-color: rgb(245, 190, 190);
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
      width: 250px;
      box-shadow: inset 000px 0px 0px 0px #e28daa;
    -webkit-transition: all 0.6s cubic-bezier(.9, .24, .40, 1);
    transition: all 0.4s cubic-bezier(.9, .24, .40, 1);
    background-color: #d4759a;;
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
      .formulario2 {
        margin-top:50px;
        margin-left:20px;
        width:700px;
      }
    }
    @media(min-width:620px) and (max-width:999px){
      .formulario {
        margin-top:120px;
        margin-left:50px;
        width:600px;
      }
      .formulario2 {
        margin-top:50px;
        margin-left:10px;
        width:500px
      }
    }
      @media(max-width:619px){
        .formulario {
          margin-top:120px;
          margin-left:45px;
          width:380px;
        }
        .formulario2 {
          margin-top:50px;
          margin-left:0px;
          width:340px
        }
      }
      @media(max-width:500px){
        .formulario {
          margin-top:120px;
          margin-left:0px;
          width:320px;
        }
        .formulario2 {
          margin-top:50px;
          margin-left:0px;
          width:280px
        }
      }
  `;

  constructor() {
    super();
    this.currentMaterial = { name: '', description: '', category: '', supplier: '', price: '', unit: '', quantity: '', acquisitionDate: '', expirationDate: '', storageLocation: '', notes: '' };
    this.editMode = false;
  }

  updateMaterial(event) {
    const { name, value } = event.target;
    this.currentMaterial = { ...this.currentMaterial, [name]: value };
  }

  addMaterial() {
    let materials = JSON.parse(localStorage.getItem('materials')) || [];
    if (this.editMode) {
      const index = materials.findIndex(material => material.name === this.currentMaterial.name);
      materials[index] = this.currentMaterial;
      this.editMode = false;
    } else {
      materials.push(this.currentMaterial);
    }
    localStorage.setItem('materials', JSON.stringify(materials));
    this.resetForm();
    console.log("Material added or updated successfully.");
  }

  searchMaterial(name) {
    let materials = JSON.parse(localStorage.getItem('materials')) || [];
    const material = materials.find(material => material.name === name);
    if (material) {
      this.currentMaterial = material;
      this.editMode = true;
      this.requestUpdate();
    } else {
      console.log("Material not found.");
    }
  }

  updateStock(quantity) {
    this.currentMaterial.quantity = quantity;
    this.addMaterial(); // Reuses the addMaterial method to update the material with the new stock quantity
  }

  resetForm() {
    this.currentMaterial = { name: '', description: '', category: '', supplier: '', price: '', unit: '', quantity: '', acquisitionDate: '', expirationDate: '', storageLocation: '', notes: '' };
    this.editMode = false;
  }

  render() {
    return html`
      <div class="formulario">
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

          <button type="button" @click="${this.addMaterial}">${this.editMode ? 'Actualizar Material' : 'Agregar Material'}</button>
        </form>
        <div class="formulario2">
        <form>
          <div>
            <h2>Buscar Material</h2>
            <input type="text" id="search-name" placeholder="Nombre del material">
            <button type="button" @click="${() => this.searchMaterial(this.shadowRoot.getElementById('search-name').value)}">Buscar</button>
          </div>
          <div>
            <h2>Actualizar Stock</h2>
            <input type="number" id="new-stock" placeholder="Nueva cantidad en stock">
            <button type="button" @click="${() => this.updateStock(this.shadowRoot.getElementById('new-stock').value)}">Actualizar Stock</button>
          </div>
      
        </form>
      </div>
        </div>

        
    `;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addMaterial();
  }
}


customElements.define('materia-prima-form', MateriaPrima);

