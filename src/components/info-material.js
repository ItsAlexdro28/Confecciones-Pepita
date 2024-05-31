import { LitElement, html, css } from 'lit';

class MaterialTable extends LitElement {
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
    this.materials = JSON.parse(localStorage.getItem('materials')) || [];
  }

  render() {
    return html`
      <h2>Materias Primas</h2>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Categoría</th>
          <th>Proveedor</th>
          <th>Precio por Unidad</th>
          <th>Unidad de Medida</th>
          <th>Cantidad en Stock</th>
          <th>Fecha de Adquisición</th>
          <th>Fecha de Vencimiento</th>
          <th>Ubicación en Almacén</th>
          <th>Notas</th>
        </tr>
        ${this.materials.map(material => html`
          <tr>
            <td>${material.name}</td>
            <td>${material.description}</td>
            <td>${material.category}</td>
            <td>${material.supplier}</td>
            <td>${material.price}</td>
            <td>${material.unit}</td>
            <td>${material.quantity}</td>
            <td>${material.acquisitionDate}</td>
            <td>${material.expirationDate}</td>
            <td>${material.storageLocation}</td>
            <td>${material.notes}</td>
          </tr>
        `)}
      </table>
    `;
  }
}

customElements.define('material-table', MaterialTable);

