import { LitElement, css, html } from 'lit'
import './components/costo-mano-obra.js'; // Asegúrate de tener la ruta correcta
import './components/materia-prima.js';
import './components/info-employees.js';
import './components/info-material.js';

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



window.customElements.define('my-element', MyElement)