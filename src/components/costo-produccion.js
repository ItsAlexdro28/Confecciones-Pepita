import { productos } from './produccion-inventario.js'; 
import './tabla-produccion.js'
import { LitElement, html, css } from 'lit';

class ClothingForm extends LitElement {
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
      box-shadow: inset 0 0 0 0 #e28daa;
      -webkit-transition: all 0.6s cubic-bezier(.9, .24, .40, 1);
      transition: all 0.4s cubic-bezier(.9, .24, .40, 1);
      background-color: #d4759a;
      position: relative;
    }
  
    button::before {
      width: 250px;
      height: 0;
      display: block;
      background: yellow;
      position: absolute;
      left: 0;
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
      box-shadow: inset 0 100px 0 0 #6098FF;
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
    this.currentProduction = {index: -1, quantity: '', size: '', hoursPerItem: 0, priceHours: 0, material: '', totalCost: 0}
    this.selectedIndex = -1;
    this.materialIndex = -1;
    this.materials = this.loadMaterialsFromLocalStorage();
  }

  handleSelectionChange(event) {
    this.selectedIndex = event.target.selectedIndex;
    this.currentProduction.index = this.selectedIndex;
    console.log(this.selectedIndex); // This will log the index of the selected item
  }
  
  updateProduction(event) {
    const { name, value } = event.target;
    this.currentProduction = { ...this.currentProduction, [name]: value };
  }
  
  loadMaterialsFromLocalStorage() {
    const materials = localStorage.getItem('materials');
    return materials ? JSON.parse(materials) : [];
  }

  updateMaterial(event) {
    let materials = this.loadMaterialsFromLocalStorage();
    this.materialIndex = event.target.value;
    this.currentProduction = {
      ...this.currentProduction,
      material: materials[event.target.value]['name']
    };
  }

  updateSize(event) {
    this.currentProduction = {
      ...this.currentProduction,
      size: event.target.value
    };
  }

  updateQuantity(event) {
    this.currentProduction = {
      ...this.currentProduction,
      quantity: event.target.value
    };
  }

  addProduction() {
    console.log(this.currentProduction);
    let production = JSON.parse(localStorage.getItem('production')) || [];
    let currentSize = this.currentProduction.size;
    let totalMaterial = Number(this.currentProduction.quantity) * Number(productos[this.selectedIndex]['material'][currentSize]['metrosMateria']);

    let materials = this.loadMaterialsFromLocalStorage();
    if (totalMaterial > Number(materials[this.materialIndex]['quantity'])) {
        console.log("No hay suficiente")
        window.alert("No tienes materiales suficientes");
    } else {
        materials[this.materialIndex]['quantity'] -= totalMaterial; 
        let priceHours = Number(this.currentProduction.hoursPerItem) * Number(this.currentProduction.priceHours);
        let priceMaterial = totalMaterial * materials[this.materialIndex]['price'];
        this.currentProduction.totalCost = priceHours + priceMaterial;
    }
    production.push(this.currentProduction);
    localStorage.setItem('production', JSON.stringify(production));
    localStorage.setItem('materials', JSON.stringify(materials));
    this.resetForm();
    console.log("Material added or updated successfully.");
  }

  resetForm() {
    this.currentProduction = {index: -1, quantity: '', size: '', hoursPerItem: 0, material: '', totalCost: 0}
  }
  render() {
    return html`
      <div class="formulario">
        <h2>Produccion de prenda</h2>
        <form @submit="${this.handleSubmit}">
            <label for="producto-select">Seleccionar Producto:</label>
            <select id="producto-select" name="producto" @change="${this.handleSelectionChange}">          
            <option value="">Seleccione un producto</option>
                ${productos.map((producto, index) => html`<option value="${index}">${producto.nombre}</option>`)}
            </select>
          
          <label>Cuantas prendas quieres produccir</label>
          <input type="number" name="quantity" .value="${this.currentProduction.quantity}" @input="${this.updateProduction}">


        <label for="material-select">Seleccionar Material:</label>
        <select id="material-select" name="material" @change="${this.updateMaterial}">
          <option value="">Seleccione un material</option>
          ${this.materials.map((material, index) => html`<option value="${index}">${material.name}</option>`)}
        </select>

        <label for="size-select">Seleccionar Talla:</label>
        <select id="size-select" name="size" @change="${this.updateSize}">
          <option value="">Seleccione una talla</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
        </select>

          <label>Horas de trabajo por una prenda</label>
          <input type="number" name="hoursPerItem" .value="${this.currentProduction.hoursPerItem}" @input="${this.updateProduction}">

          <label>Precio por hora de trabajo</label>
          <input type="number" name="priceHours" .value="${this.currentProduction.priceHours}" @input="${this.updateProduction}">

          <button type="button" @click="${this.addProduction}">Generar Produccion</button>
        </form>
    </div>
        <production-table> </production-table>
    `;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addMaterial();
  }
}
// :w
customElements.define('clothing-form', ClothingForm);
