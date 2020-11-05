/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * @author Nicolás Penagos Montoya
 * nicolas.penagosm98@gmail.com
 **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
class DoneQueue{

    constructor(task){
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

        let backBtn = document.createElement('span');
        backBtn.className = 'backBtn';

        let taskContainer = document.createElement('div');
        taskContainer.className = 'taskContainer';
        taskContainer.innerHTML = this.task.taskText;

        deleteBtn.addEventListener('click', () => {
            //Delete
            database.ref('done/' + this.task.id).set(null);
        });

        backBtn.addEventListener('click', () => {
            //To doing
            let reference = database.ref('doing/'+this.task.id);
            reference.set(this.task);

            database.ref('done/' + this.task.id).set(null);
        });

        component.appendChild(deleteBtn);
        component.appendChild(backBtn);
        component.appendChild(dateContainer);
        component.appendChild(taskContainer);

        return component;

    }

}