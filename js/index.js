/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * @author Nicolás Penagos Montoya
 * nicolas.penagosm98@gmail.com
 **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// -------------------------------------
// DECLARATIONS
// -------------------------------------
const database = firebase.database(); //
const taskInput = document.getElementById('taskInput');
const taskButton = document.getElementById('taskButton');
const toDoContainer = document.getElementById('toDoContainer');
const doingContainer = document.getElementById('doingContainer');
const doneContainer = document.getElementById('doneContainer');

// -------------------------------------
// FUNCTIONS
// -------------------------------------
addTask = () => {

    let task = taskInput.value;

    if (task == '') {
        alert('The task cannot be empty');
        return;
    }

    let reference = database.ref('todo').push();

    let today = new Date();
    let dateText = '' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    let taskObj = {
        id: reference.key,
        taskText: taskInput.value,
        date: dateText,
    }

    reference.set(taskObj);

    taskInput.value = '';
}

// -------------------------------------
// EVENTS
// -------------------------------------
taskButton.addEventListener('click', addTask);

// -------------------------------------
// READING
// -------------------------------------
database.ref('todo').on('value', function (data) {
    toDoContainer.innerHTML = '';
    data.forEach(

        task => {
            let val = task.val();
            let toDoQueue = new ToDoQueue(val);
            toDoContainer.appendChild(toDoQueue.render());
        }
    );
});

database.ref('doing').on('value', function (data) {
    doingContainer.innerHTML = '';
    data.forEach(

        task => {
            let val = task.val();
            let doingQueue = new DoingQueue(val);
            doingContainer.appendChild(doingQueue.render());
        }
    );
});

database.ref('done').on('value', function (data) {
    doneContainer.innerHTML = '';
    data.forEach(

        task => {
            let val = task.val();
            let doneQueue = new DoneQueue(val);
            doneContainer.appendChild(doneQueue.render());
        }
    );
});