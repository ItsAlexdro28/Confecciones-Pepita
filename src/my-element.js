import { LitElement, css, html } from 'lit'
import './components/costo-mano-obra.js'; 
import './components/materia-prima.js';
import './components/costo-lote.js';
import './components/eficiencia.js';
import './components/info-employees.js';
import './components/tabla-materia-prima.js';
import './components/info-enficiencia.js';
import './components/info-lote.js';
import './components/costos-indirectos.js';
import './components/tabla-costos-indirectos.js';
import './components/tabla-mano-obra.js';


// formulario de registro de empleados
function mostrarFormularioEmpleado() {
  // Crea una instancia del componente EmployeeForm
  const employeeForm = document.createElement('mano-obra-form');
  
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
  const materialForm = document.createElement('materia-prima-form');
  
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
  const materialTable = document.createElement('tabla-materia-prima');

  document.getElementById('main').innerHTML='';
  document.getElementById('main').appendChild(materialTable);
}

document.getElementById('showMaterialsTable').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarTablaMateriaPrima()
})


// tabla mano de obra

function mostrarTablaManoObra(){
  const employeeTable = document.createElement('tabla-mano-obra');

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
  const batchTable = document.createElement('batche-table');

  document.getElementById('main').innerHTML='';
  document.getElementById('main').appendChild(batchTable);
}

document.getElementById('showBatch').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarTablaLotes()
})

// formulario registro de costos indirectos

function mostrarFormularioCostosIndirectos(){
  const costsForm = document.createElement('costos-indirectos-form');

  document.getElementById('main').innerHTML='';
  document.getElementById('main').appendChild(costsForm);
}

document.getElementById('showCostsForm').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarFormularioCostosIndirectos();
})

// tabla costos indirectos
function mostrarTablaCostosIndirectos(){
  const costsTable = document.createElement('tabla-costos-indirectos');

  document.getElementById('main').innerHTML='';
  document.getElementById('main').appendChild(costsTable);
}

document.getElementById('showCostsTable').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarTablaCostosIndirectos()
})


window.customElements.define('my-element', MyElement)

