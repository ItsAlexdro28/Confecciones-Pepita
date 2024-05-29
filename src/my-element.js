import { LitElement, css, html } from 'lit'
import './components/costo-mano-obra.js'; // Asegúrate de tener la ruta correcta
import './components/materia-prima.js';

// document.getElementById('showEmployeeForm').addEventListener('click', function(event) {
//     event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    
//     // Crea una instancia del componente EmployeeForm
//     const employeeForm = document.createElement('employee-form');
    
//     // Agrega el formulario al contenedor principal
//     document.getElementById('main').appendChild(employeeForm);
// });



// document.getElementById('showMaterialsForm').addEventListener('click', function(event) {
//     event.preventDefault();

//     const materialsForm= document.createElement('material-form');

//     document.getElementById('main').appendChild(materialsForm);
// });

// Función para mostrar el formulario de registro de empleados
function mostrarFormularioEmpleado() {
  // Crea una instancia del componente EmployeeForm
  const employeeForm = document.createElement('employee-form');
  
  // Reemplaza el contenido del elemento 'main' con el formulario de empleado
  document.getElementById('main').innerHTML = '';
  document.getElementById('main').appendChild(employeeForm);
}

// Función para mostrar el formulario de registro de materia prima
function mostrarFormularioMateriaPrima() {
  // Crea una instancia del componente MaterialForm
  const materialForm = document.createElement('material-form');
  
  // Reemplaza el contenido del elemento 'main' con el formulario de materia prima
  document.getElementById('main').innerHTML = '';
  document.getElementById('main').appendChild(materialForm);
}

// Añadir event listeners a los enlaces de Materia prima y Mano de obra
document.getElementById('showMaterialsForm').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarFormularioMateriaPrima();
});

document.getElementById('showEmployeeForm').addEventListener('click', function(event) {
  event.preventDefault();
  mostrarFormularioEmpleado();
});


window.customElements.define('my-element', MyElement)