
// import { LitElement, html, css } from 'lit';

// class TablaManoDeObra extends LitElement {
//   static styles = css`
//     .tabla {
//       position:absolute;
//       top:220px;
//       left:250px;
//       display: block;
//       font-family: Arial, sans-serif;
//       max-width: 800px;
//       margin: 0 auto;
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
//     @media(min-width:620px) and (max-width:999px) {
//       .tabla {
//         margin-top: 120px;
//         margin-left: 20px;
//         width: 600px;
//       }
//       table {
//         display: flex;
//         flex-direction: column;
//       }
//       tr {
//         display: flex;
//         flex-direction: row;
//         flex-wrap: wrap;
//         width: 100%;
//       }
//       th, td {
//         width: 50%;
//       }
//     }
//     @media(max-width:619px) {
//       .tabla {
//         margin-top: 120px;
//         margin-left: 45px;
//         width: 370px;
//       }
//     }
//   `;

//   constructor() {
//     super();
//     this.TablaManoDeObra = JSON.parse(localStorage.getItem('TablaManoDeObra')) || [];
//     this.updateData = this.updateData.bind(this);
//   }

//   connectedCallback() {
//     super.connectedCallback();
//     window.addEventListener('employee-added', this.updateData);
//   }

//   disconnectedCallback() {
//     super.disconnectedCallback();
//     window.removeEventListener('employee-added', this.updateData);
//   }

//   updateData() {
//     this.TablaManoDeObra = JSON.parse(localStorage.getItem('TablaManoDeObra')) || [];
//     this.requestUpdate();
//   }

//   render() {
//     return html`
//       <div class="tabla">
//         <h2>Costos de Mano de Obra</h2>
//         <table>
//           ${this.TablaManoDeObra.map(employee => html`
//             <tr>
//               <th>Salario por Hora</th>
//               <td>${employee.hourlyWage}</td>
//             </tr>
//             <tr>
//               <th>Horas Trabajadas</th>
//               <td>${employee.hoursWorked}</td>
//             </tr>
//             <tr>
//               <th>Beneficios</th>
//               <td>${employee.benefits}</td>
//             </tr>
//             <tr>
//               <th>Total Salario</th>
//               <td>${employee.totalSalary.toFixed(2)}</td>
//             </tr>
//           `)}
//         </table>
//       </div>
//     `;
//   }
// }

// customElements.define('tabla-mano-obra', TablaManoDeObra);





import { LitElement, html, css } from 'lit';

class TablaManoDeObra extends LitElement {
  static styles = css`
    .tabla {
      position:absolute;
      top:220px;
      left:250px;
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
    tr {
      display:none;
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
    @media(min-width:620px) and (max-width:999px) {
      .tabla {
        margin-top: 120px;
        margin-left: 20px;
        width: 600px;
      }
      tr {
        display:none;
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
    this.tablaManoDeObra = JSON.parse(localStorage.getItem('tablaManoDeObra')) || [];
  }

  render() {
    return html`
      <div class="tabla">
        <h2>Costos de Mano de Obra</h2>
        <table>
          ${this.TablaManoDeObra.map(employee => html`
            <tr>
              <th>Nombre</th>
              <td>Hola</td>
            </tr>
            <tr>
              <th>Salario por Hora</th>
              <td>${employee.hourlyWage}</td>
            </tr>
            <tr>
              <th>Horas Trabajadas</th>
              <td>${employee.hoursWorked}</td>
            </tr>
            <tr>
              <th>Beneficios</th>
              <td>${employee.benefits}</td>
            </tr>
            <tr>
              <th>Costos Indirectos</th>
              <td>${employee.overheads}</td>
            </tr>
            <tr>
              <th>Total Salario</th>
              <td>${employee.totalSalary.toFixed(2)}</td>
            </tr>
          `)}
        </table>
      </div>
    `;
  }
}

customElements.define('tabla-mano-obra', TablaManoDeObra);