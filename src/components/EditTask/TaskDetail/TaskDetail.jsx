import styles from '../../../styleSheets/EditTask.module.css'; 


function TaskDetail({ taskData, setTaskdata,  }) {

const changeHandler = e => {
        const { name, value } = e.target;
        setTaskdata({
            ...taskData,
            [name]: value,
        });
    }


 return (
     <div className={styles.taskinfo}>
                <h5 className={styles.taskInfoName}>Task Name</h5>
         <input className={styles.taskName} name="taskTitle" placeholder='Enter a Task name' value={ taskData.taskTitle ? taskData.taskTitle : "" } onChange={changeHandler} />
                <h5 className={styles.taskInfoName}>Description</h5>
                <textarea rows="7" cols="50" className={styles.taskDesc} name="task_description" placeholder='Enter a short derscription' value = {taskData.task_description?taskData.task_description:""}  onChange={changeHandler}/>
                    </div>
 )
      }


export default TaskDetail