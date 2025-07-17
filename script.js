function nuevaTarea() {
  const cont = document.getElementById('organizador-tareas');
  const tarea = document.createElement('input');
  tarea.type = 'text';
  tarea.placeholder = 'Escribe tu nueva tarea...';
  cont.appendChild(tarea);
  cont.appendChild(document.createElement('br'));
}

function agregarFarmaco() {
  const tabla = document.getElementById('farmacos-tabla');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Nombre del fármaco, mecanismo de acción...';
  tabla.appendChild(input);
  tabla.appendChild(document.createElement('br'));
}

function guardarDiario() {
  const texto = document.getElementById('diario-texto').value;
  localStorage.setItem('diarioIdeas', texto);
  alert("Diario guardado.");
}

function guardarNotas() {
  const texto = document.getElementById('notas-texto').value;
  localStorage.setItem('notasApuntes', texto);
  alert("Apuntes guardados.");
}

// Cargar datos previos
window.onload = () => {
  document.getElementById('diario-texto').value = localStorage.getItem('diarioIdeas') || '';
  document.getElementById('notas-texto').value = localStorage.getItem('notasApuntes') || '';
}
