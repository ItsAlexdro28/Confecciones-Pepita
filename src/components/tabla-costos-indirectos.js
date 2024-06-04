import { LitElement, html, css } from 'lit';

class TablaCostosIndirectos extends LitElement {
  static styles = css`
    .tabla {
      margin-top: 250px;
      margin-left: 300px;
      display: block;
      font-family: Arial, sans-serif;
      width: 900px;
      padding: 20px;
      padding-left:20px;
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    table {
      width:860px;
      border-collapse: collapse;
      margin-right:20px
    }

    th, td {
      padding: 10px;
      border: 1px solid #ccc;
      text-align: left;
      display: block;
      width: 100%;
    }

    th {
      background-color: #c2fdefe8;
      color: grey;
    }

    tr {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }

    @media (min-width: 1000px) and (max-width: 1400px) {
      .tabla {
        margin-top: 180px;
        margin-left: 50px;
        width: 1200px;
      }
    }

    @media (min-width: 620px) and (max-width: 999px) {
      .tabla {
        margin-top: 120px;
        margin-left: 20px;
        width: 600px;
      }
    }

    @media(max-width:619px) {
      .tabla {
        margin-top: 120px;
        margin-left: 45px;
        width: 370px;
      }
      tr{
        width:340px;
      }
    }
  `;

  constructor() {
    super();
    this.indirectCosts = JSON.parse(localStorage.getItem('indirectCosts')) || [];
  }

  render() {
    return html`
    <div class="tabla">
      <h2>Costos Indirectos</h2>
      <table>
        <tbody>
          ${this.indirectCosts.map(cost => html`
            <tr>
              <th>Nombre</th>
              <td>${cost.name}</td>
            </tr>
            <tr>
              <th>Descripción</th>
              <td>${cost.description}</td>
            </tr>
            <tr>
              <th>Valor (COP)</th>
              <td>${cost.value}</td>
            </tr>
          `)}
        </tbody>
      </table>
    </div>
  `;
  }
}

customElements.define('tabla-costos-indirectos', TablaCostosIndirectos);



// import { LitElement, html, css } from 'lit';

// class TablaCostosIndirectos extends LitElement {
//   static styles = css`
//     .tabla {
//       position:absolute;
//       top:150px;
//       left:150px;
//       display: block;
//       font-family: Arial, sans-serif;
//       width: 800px;
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
//       background-color: #c2fdefe8;
//       color: grey;
//     }
//   `;

//   constructor() {
//     super();
//     this.indirectCosts = JSON.parse(localStorage.getItem('indirectCosts')) || [];
//   }

//   render() {
//     return html`
//     <div class="tabla">
//       <h2>Costos Indirectos</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>Descripción</th>
//             <th>Valor (COP)</th>
//           </tr>
//         </thead>
//         <tbody>
//           ${this.indirectCosts.map(cost => html`
//             <tr>
//               <td>${cost.name}</td>
//               <td>${cost.description}</td>
//               <td>${cost.value}</td>
//             </tr>
//           `)}
//         </tbody>
//       </table>
//     </div>
//   `;
//   }

// }

// customElements.define('tabla-costos-indirectos', TablaCostosIndirectos);