import AddTaskicon from '../../images/Add_round_duotone.svg'
import styles from '../../styleSheets/AddTask.module.css'; 
import { createTask, getTasks } from '../../redux/tasks/tasksOperators'
import { useDispatch, } from 'react-redux';
import { getUserID, } from '../../redux/tasks/tasksSelectors'
import { useSelector } from 'react-redux';

function AddTask() {
    

    const dispatch = useDispatch()
    const userID = useSelector(getUserID)

    const addNewTask = async () => {
        const usersInfo = {
                      user_id: userID,
                 }
     const result = await dispatch(createTask(usersInfo))
                 if (result.meta.requestStatus === "fulfilled") {
                     await dispatch(getTasks(usersInfo))
                 }
}

 return (
     <>
     <button className={styles.additem}
        onClick={addNewTask}
        >
<div className={styles.taskHeading}>
            <div className={styles.iconSize}>
                 <img className={styles.addicon} src={AddTaskicon} alt="Add New Task" />
            </div>
            <div className={styles.addInfo}>
                     <h3 className={styles.addName}>add new task</h3>
                     
                 </div>
                 <div style={{height: '42px', width: '42px'}}></div>
           </div>
        </button>
     
     
     </>

 )
}

export default AddTask