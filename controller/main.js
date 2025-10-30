//controller principal

//crud (crear, leer, actualizar, eliminar)
//funcion agregar empleado (crud-crear)
function crearEmpleado(){

    document.getElementById('divAgregarEmpleado').style.display='block';

}
function agregarEmpleado(){
    alert ("entro a agregar Empleado");

    // Cargar empleados guardados al iniciar
     document.addEventListener("DOMContentLoaded", mostrarEmpleados);

     
document.getElementById('formEmpleado').addEventListener('submit', function(e) {
     e.preventDefault();


    const empleado = new Empleado(
        document.getElementById("cc").value,
	    document.getElementById("nombresyApellidos").value,
		document.getElementById("direccion").value,
		document.getElementById("email").value,
		document.getElementById("telefono").value,
		document.getElementById("sueldoBase").value,
        document.getElementById("tipoEmpleado").value,
        document.getElementById("tipoBonificacion").value,
    );
//crear un nuevo json

let empleados = JSON.parse(localStorage.getItem("empleados")) || [];
//agregar nuevo empleado

empleados.push(empleado);

//guardar en local storage
localStorage.setItem("empleados", JSON.stringify(empleados));
//llamar la funcion , para mostrar los empleados en la tabla
mostrarEmpleados();

e.target.reset();
});

// Mostrar empleados en tabla
    function mostrarEmpleados() {
      const tbody = document.querySelector('#tablaEmpleados tbody');
      tbody.innerHTML = '';

      const empleados = JSON.parse(localStorage.getItem('empleados')) || [];

      empleados.forEach((emp,index) => {
        const fila = `<tr>
          <td>${index + 1}</td> <!-- Aquí se genera el número autoincremento con el index del array -->
          <td>${emp.cc}</td>
          <td>${emp.nombresyApellidos}</td>
          <td>${emp.direccion}</td>
          <td>${emp.email}</td>
          <td>${emp.telefono}</td>
          <td>${emp.sueldoBase}</td>
          <td>${emp.tipoEmpleado}</td>
          <td>${emp.tipoBonificacion}</td>
            <td>${emp.saldoTotal}</td>


        </tr>`;
        tbody.innerHTML += fila;
      });
      hallarTotalNomina();
    }
   function hallarTotalNomina() {
    const empleados = JSON.parse(localStorage.getItem("empleados")) || [];
    
    // Convertir cada saldoTotal a número antes de sumar
    const total = empleados.reduce((sum, empleado) => {
        const saldo = parseInt(empleado.saldoTotal) || 0;  // ← Convierte a número
        return sum + saldo;
    }, 0);
    
    let totalDiv = document.getElementById('totalNomina');
    if (!totalDiv) {
        totalDiv = document.createElement('div');
        totalDiv.id = 'totalNomina';
        totalDiv.className = 'total-nomina';
        totalDiv.style.marginTop = '20px';
        totalDiv.style.padding = '15px';
        totalDiv.style.background = '#e9ecef';
        totalDiv.style.borderRadius = '4px';
        totalDiv.style.fontSize = '18px';
        totalDiv.style.fontWeight = 'bold';
        totalDiv.style.textAlign = 'right';
        document.querySelector('.content').appendChild(totalDiv);
    }
    totalDiv.innerHTML = `<strong>Total Nómina: $ ${total.toLocaleString()}</strong>`;
}

}

