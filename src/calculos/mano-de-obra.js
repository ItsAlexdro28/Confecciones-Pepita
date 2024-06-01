let employees = {};
let benefits = {};
let indirect = {};
let totalSalary;

function loadFromLocalStorage() {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    const storedBenefits = parseFloat(localStorage.getItem('benefits')) || 0;
    const storedIndirect = JSON.parse(localStorage.getItem('Indirect')); //may change
    if (storedEmployees) {
    employees = storedEmployees;
    benefits = storedBenefits;
    indirect = storedIndirect;
    }
}

function calculateSalary() {
    let totalSalary = 0;
    for (let employee of this.employees) {
    const salary = parseFloat(employees.salary) || 0;
    const hours = parseFloat(employees.hours) || 0;
    totalSalary += salary * hours;
    }
    totalSalary = totalSalary + benefits;
    return totalSalary;
}

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

function addIndirectPrices () {
    let alquiler  = storedIndirect.alquiler;
    let servicios = storedIndirect.servicios;
    let maquinaria = storedIndirect.maquinaria;
    let protecion = storedIndirect.protecion;
    let formacion = storedIndirect.formacion;
    let seguros = storedIndirect.seguros;
    let oficina = storedIndirect.oficina;
    let transporte = storedIndirect.transporte;
    let permisos = storedIndirect.permisos;
    let limpieza = storedIndirect.limpieza;

    let totalIndirect = sum(alquiler, servicios, maquinaria, protecion, formacion, seguros, oficina, transporte, permisos, limpieza);
    return totalIndirect;
}

function costWorkingLabour (inputSalary, inputIndirec) {
    if (inputIndirec && inputSalary) {
        return (inputIndirec + inputSalary)
    }
    let indirect = addIndirectPrices();
    let salary = calculateSalary(); 
    return (indirect + salary);
} 