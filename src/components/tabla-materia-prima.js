
import { LitElement, html, css } from 'lit';

class TablaMateriaPrima extends LitElement {
  static styles = css`
    .tabla {
      margin-top: 250px;
      margin-left: 400px;
      display: block;
      font-family: Arial, sans-serif;
      max-width: 1200px;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    table {
      width: 800px;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      padding: 10px;
      border: 1px solid #ccc;
      text-align: left;
      width:400px;
    }
    
    th {
      background-color: #c2fdefe8 ;
      color: grey;
      
    }
    @media(min-width: 1000px) and (max-width: 1400px) {
      .tabla {
        margin-top: 180px;
        margin-left: 50px;
        width: 1200px;
      }
    }
    @media(min-width: 620px) and (max-width: 999px) {
      .tabla {
        margin-top: 120px;
        margin-left: 20px;
        width: 600px;
      }
      table {
        display: flex;
        flex-direction: column;
      }
      tr {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
      }
      th, td {
        width: 50%;
      }
    }
    @media(max-width:619px){
      .tabla {
        margin-top:100px;
        margin-left:45px;
        width:370px;
      }
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
          ${this.materials.map(material => html`
            <tr>
              <th>Nombre</th>
              <td>${material.name}</td>
            </tr>
            <tr>
              <th>Descripción</th>
              <td>${material.description}</td>
            </tr>
            <tr>
              <th>Categoría</th>
              <td>${material.category}</td>
            </tr>
            <tr>
              <th>Proveedor</th>
              <td>${material.supplier}</td>
            </tr>
            <tr>
              <th>Precio por Unidad</th>
              <td>${material.price}</td>
            </tr>
            <tr>
              <th>Unidad de Medida</th>
              <td>${material.unit}</td>
            </tr>
            <tr>
              <th>Cantidad en Stock</th>
              <td>${material.quantity}</td>
            </tr>
            <tr>
              <th>Fecha de Adquisición</th>
              <td>${material.acquisitionDate}</td>
            </tr>
            <tr>
              <th>Fecha de Vencimiento</th>
              <td>${material.expirationDate}</td>
            </tr>
            <tr>
              <th>Ubicación en Almacén</th>
              <td>${material.storageLocation}</td>
            </tr>
            <tr>
              <th>Notas</th>
              <td>${material.notes}</td>
            </tr>
          `)}
        </table>
      </div>
    `;
  }
}

customElements.define('tabla-materia-prima', TablaMateriaPrima);
