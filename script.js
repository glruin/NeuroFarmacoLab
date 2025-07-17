function nuevaTarea() {
  const cont = document.getElementById('organizador-tareas');
  const tarea = document.createElement('input');
  tarea.type = 'text';
  tarea.placeholder = 'Nueva tarea...';
  cont.appendChild(tarea);
  cont.appendChild(document.createElement('br'));
}

function mostrarInfo(region) {
  const info = {
    "Corteza Prefrontal": "Asociada a funciones ejecutivas, toma de decisiones, y trastornos como TDAH y depresión.",
    "Hipocampo": "Relacionado con la memoria y el aprendizaje. Afectado en Alzheimer y epilepsia temporal.",
    "Amígdala": "Centro de emociones, particularmente miedo. Clave en ansiedad y PTSD."
  };
  document.getElementById('info-cerebro').innerText = info[region] || 'Sin información.';
}

function agregarFarmaco() {
  const nombre = document.getElementById('nombreFarmaco').value;
  const receptor = document.getElementById('receptorFarmaco').value;
  const mecanismo = document.getElementById('mecanismoFarmaco').value;

  if (!nombre || !receptor || !mecanismo) return alert("Completa todos los campos.");

  const tabla = document.querySelector('#tabla-farmacos tbody');
  const fila = document.createElement('tr');

  fila.innerHTML = `
    <td>${nombre}</td>
    <td>${receptor}</td>
    <td>${mecanismo}</td>
    <td><button onclick="this.parentElement.parentElement.remove()">Eliminar</button></td>
  `;
  tabla.appendChild(fila);

  document.getElementById('nombreFarmaco').value = "";
  document.getElementById('receptorFarmaco').value = "";
  document.getElementById('mecanismoFarmaco').value = "";
}

function guardarDiario() {
  localStorage.setItem('diarioIdeas', document.getElementById('diario-texto').value);
  alert("Diario guardado");
}

function guardarNotas() {
  localStorage.setItem('notasApuntes', document.getElementById('notas-texto').value);
  alert("Notas guardadas");
}

window.onload = () => {
  document.getElementById('diario-texto').value = localStorage.getItem('diarioIdeas') || '';
  document.getElementById('notas-texto').value = localStorage.getItem('notasApuntes') || '';
};

