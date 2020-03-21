
const tasks = [
	{ name: 'Recoger setas en el campo', completed: true },
	{ name: 'Comprar pilas', completed: true },
	{ name: 'Poner una lavadora de blancos', completed: true },
	{
		name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
		completed: false
	}
];

//*aqui recorremos la lista de tareas*/
for (let i = 0; i < tasks.length; i++) {

  document.getElementById('element1')
  .innerHTML += `<li id='${i}' > ${tasks[i].name} <input type='checkbox' checked id='input${i}' 
  name='input${i}' onclick="setCheckBox(${i})"> </li>`;

	if (tasks[i].completed === true) {
		document.getElementById(`${i}`).classList.add('tachado');
  }

  document.getElementById(`input${i}`).checked = tasks[i].completed;

  checkPendingTasks();
}

function setCheckBox(index) { /* obtiene el indice en el que estamos parados, cambiamos utilizando un ternario*/ 
  tasks[index].completed = tasks[index].completed ? false : true;
  const { completed } = tasks[index]; /*le decimos al arreglo que tiene y solo devuelva la propiedad compeltado.*/

  if(completed) {/*si está completado le asignamos la clase tachado*/
    document.getElementById(`${index}`).classList.add('tachado'); /*elemento index es elemento de la lista*/
  } else 
  {
    document.getElementById(`${index}`).classList.remove('tachado');
  }

  document.getElementById(`input${index}`).checked = completed; /* al input donde estamos parados cambiamos la propiedad */
  checkPendingTasks(); /*hequeamos las tareas que quedan pendientes*/
}

function checkPendingTasks() {
  const number = tasks.filter((task) => task.completed === false);
  document.getElementById('pending-tasks').innerHTML = ` ${number.length} `;
}


