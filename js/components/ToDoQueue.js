/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * @author Nicolás Penagos Montoya
 * nicolas.penagosm98@gmail.com
 **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
class ToDoQueue {

    constructor(task) {
        this.task = task;
    }

    render = () => {

        let component = document.createElement('div');
        component.className = 'task';

        let dateContainer = document.createElement('div');
        dateContainer.className = 'dateContainer';
        dateContainer.innerHTML = this.task.date;

        let deleteBtn = document.createElement('span');
        deleteBtn.className = 'deleteBtn';

        let nextBtn = document.createElement('span');
        nextBtn.className = 'nextBtn';

        let taskContainer = document.createElement('div');
        taskContainer.className = 'taskContainer';
        taskContainer.innerHTML = this.task.taskText;

        deleteBtn.addEventListener('click', () => {
            //Delete
            database.ref('todo/' + this.task.id).set(null);
        });

        nextBtn.addEventListener('click', () => {
            //To doing
            let reference = database.ref('doing/'+this.task.id);
            reference.set(this.task);

            database.ref('todo/' + this.task.id).set(null);
        });

        component.appendChild(deleteBtn);
        component.appendChild(nextBtn);
        component.appendChild(dateContainer);
        component.appendChild(taskContainer);

        return component;

    }

}