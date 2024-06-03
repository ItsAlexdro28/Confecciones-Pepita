import { LitElement, css, html } from 'lit'
import './components/costo-mano-obra.js'; // Asegúrate de tener la ruta correcta
import './components/materia-prima.js';
import './components/costo-lote.js';
import './components/eficiencia.js';
import './components/info-employees.js';
import './components/info-material.js';
import './components/info-enficiencia.js';
import './components/info-lote.js';

// formulario de registro de empleados
function mostrarFormularioEmpleado() {
  // Crea una instancia del componente EmployeeForm
  const employeeForm = document.createElement('employee-form');
  
  // Reemplaza el contenido del elemento 'main' con el formulario de empleado
  document.getElementById('main').innerHTML = '';
  document.getElementById('main').appendChild(employeeForm);
}

document.getElementById('showEmployeeForm').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarFormularioEmpleado();
});


// formulario de registro de materia prima
function mostrarFormularioMateriaPrima() {
  const materialForm = document.createElement('material-form');
  
  document.getElementById('main').innerHTML = '';
  document.getElementById('main').appendChild(materialForm);
}

document.getElementById('showMaterialsForm').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarFormularioMateriaPrima();
});

// formulario registro de lote

function mostrarFormularioLotes(){
  const batchForm = document.createElement('batch-form');

  document.getElementById('main').innerHTML='';
  document.getElementById('main').appendChild(batchForm);
}

document.getElementById('showBatchForm').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarFormularioLotes();
})

// formulario registro de eficiencia

function mostrarFormularioEficiencia(){
  const batchForm = document.createElement('eficiency-form');

  document.getElementById('main').innerHTML='';
  document.getElementById('main').appendChild(batchForm);
}

document.getElementById('showEficiencyForm').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarFormularioEficiencia();
})

// tabla materia prima
function mostrarTablaMateriaPrima(){
  const materialTable = document.createElement('material-table');

  document.getElementById('main').innerHTML='';
  document.getElementById('main').appendChild(materialTable);
}

document.getElementById('showMaterialsTable').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarTablaMateriaPrima()
})


// tabla mano de obra

function mostrarTablaManoObra(){
  const employeeTable = document.createElement('info-table');

  document.getElementById('main').innerHTML='';
  document.getElementById('main').appendChild(employeeTable);
}

document.getElementById('showEmployee').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarTablaManoObra()
})

// tabla eficiencia

function mostrarTablaEficiencia(){
  const eficiencieTable = document.createElement('eficiencie-table');

  document.getElementById('main').innerHTML='';
  document.getElementById('main').appendChild(eficiencieTable);
}

document.getElementById('showEficiency').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarTablaEficiencia()
})

// tabla lote

function mostrarTablaLotes(){
  const batchTable = document.createElement('batch-table');

  document.getElementById('main').innerHTML='';
  document.getElementById('main').appendChild(batchTable);
}

document.getElementById('showBatch').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarTablaLotes()
})

window.customElements.define('my-element', MyElement)