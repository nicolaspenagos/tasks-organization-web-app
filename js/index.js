/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * @author Nicolás Penagos Montoya
 * nicolas.penagosm98@gmail.com
 **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// -------------------------------------
// DECLARATIONS
// -------------------------------------
const database = firebase.database();
const taskInput = document.getElementById('taskInput');
const taskButton = document.getElementById('taskButton');

// -------------------------------------
// FUNCTIONS
// -------------------------------------
addTask  = () =>{

    let task = taskInput.value;
    
    if(task == ''){
        alert('The task cannot be empty');
        return;
    }

    taskInput.value = '';
}

// -------------------------------------
// EVENTS
// -------------------------------------
taskButton.addEventListener('click', addTask);