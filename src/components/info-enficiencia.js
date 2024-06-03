// import { LitElement, html, css } from 'lit';

// class eficiencieTable extends LitElement {
//   static styles = css`
//     .tabla {
//       margin-top:250px;
//       margin-left:300px;
  
//       display: block;
//       font-family: Arial, sans-serif;
//       max-width: 1200px;
//       padding: 20px;
//       background-color: #f9f9f9;
//       border-radius: 10px;
//       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     }
//     table {
//       width: 100%;
//       border-collapse: collapse;
//       margin: 20px 0;
//     }
//     th, td {
//       padding: 10px;
//       border: 1px solid #ccc;
//       text-align: left;
      
//     }
//     th {
//       background-color: #c2fdefe8 ;
//       color: grey;
//     }
//     @media(min-width:1000px) and (max-width:1400px){
//       .tabla {
//         margin-top:180px;
//         margin-left:100px;
//         width:1100px;
//     }
//   }
//   `;

//   constructor() {
//     super();
//     this.eficiencies = JSON.parse(localStorage.getItem('eficiencies')) || [];
//   }

//   render() {
//     return html`
//     <div class="tabla">
//       <h2>Datos de Eficiencia</h2>
//       <table>
//         <tr>
//           <th>Cantidad de productos terminados</th>
//           <th>Horas totales de producion</th>
//           <th>Costos Operativos</th>
//           <th>Numero Productos defectuosos</th>
//           <th>Produtividad</th>
//           <th>Costo operativo por unidad</th>
//           <th>Tasa de defectos</th>
//           <th>Producion efectiva</th>
//           <th>Eficiencia Operativa</th>
//         </tr>
//         ${this.eficiencies.map(eficiencie => html`
//           <tr>
//             <td>${eficiencie.finishedProducts}</td>
//             <td>${eficiencie.workingHours}</td>
//             <td>${eficiencie.workingCost}</td>
//             <td>${eficiencie.brokenProducts}</td>
//             <td>${eficiencie.productivity}</td>
//             <td>${eficiencie.costPerUnit}</td>
//             <td>${eficiencie.brokenRate}</td>
//             <td>${eficiencie.efectiveProduction}</td>
//             <td>${eficiencie.operativeEficiency}</td>
//           </tr>
//         `)}
//       </table>
//     </div>
//     `;
//   }
// }

// customElements.define('eficiencie-table', eficiencieTable);

import { LitElement, html, css } from 'lit';

class eficiencieTable extends LitElement {
  static styles = css`
    .tabla {
      margin-top: 250px;
      margin-left: 300px;
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
      background-color: #c2fdefe8;
      color: grey;
    }

    @media (min-width: 1000px) and (max-width: 1400px) {
      .tabla {
        margin-top: 180px;
        margin-left: 100px;
        width: 1100px;
      }
    }
    @media (min-width: 620px) and (max-width: 999px) {
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
  `;

  constructor() {
    super();
    this.eficiencies = JSON.parse(localStorage.getItem('eficiencies')) || [];
  }

  render() {
    return html`
      <div class="tabla">
        <h2>Datos de Eficiencia</h2>
        <table>
          ${this.eficiencies.map(eficiencie => html`
            <tr>
              <th>Cantidad de productos terminados</th>
              <td>${eficiencie.finishedProducts}</td>
            </tr>
            <tr>
              <th>Horas totales de producción</th>
              <td>${eficiencie.workingHours}</td>
            </tr>
            <tr>
              <th>Costos Operativos</th>
              <td>${eficiencie.workingCost}</td>
            </tr>
            <tr>
              <th>Numero Productos defectuosos</th>
              <td>${eficiencie.brokenProducts}</td>
            </tr>
            <tr>
              <th>Productividad</th>
              <td>${eficiencie.productivity}</td>
            </tr>
            <tr>
              <th>Costo operativo por unidad</th>
              <td>${eficiencie.costPerUnit}</td>
            </tr>
            <tr>
              <th>Tasa de defectos</th>
              <td>${eficiencie.brokenRate}</td>
            </tr>
            <tr>
              <th>Producción efectiva</th>
              <td>${eficiencie.efectiveProduction}</td>
            </tr>
            <tr>
              <th>Eficiencia Operativa</th>
              <td>${eficiencie.operativeEficiency}</td>
            </tr>
          `)}
        </table>
      </div>
    `;
  }
}

customElements.define('eficiencie-table', eficiencieTable);
