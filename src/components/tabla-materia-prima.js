import { LitElement, html, css } from 'lit';

class TablaMateriaPrima extends LitElement {
  static styles = css`
    .tabla {
      margin-top:250px;
      margin-left:300px;
  
      display: block;
      font-family: Arial, sans-serif;
      max-width: 1200px;
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
      background-color: #c2fdefe8 ;
      color: grey;
    }
  `;

  constructor() {
    super();
    this.materials = JSON.parse(localStorage.getItem('materials')) || [];
  }

  render() {
    return html`
    <div class="tabla">
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
    </div>
    `;
  }
}

customElements.define('tabla-materia-prima', TablaMateriaPrima);

