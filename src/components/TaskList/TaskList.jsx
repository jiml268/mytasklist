import {useSelector, useDispatch } from 'react-redux';
import { getTasklist, } from '../../redux/tasks/tasksSelectors'
import { setEditData} from '../../redux/tasks/tasksSlice'
import styles from '../../styleSheets/TaskList.module.css'; 
import { SetEditIndex, } from "../../redux/tasks/tasksSlice";
import laptop from '../../images/laptop.png'
import message from '../../images/message.png'
import coffee from '../../images/coffee.png'
import weightlift from '../../images/weightlift.png'
import books from '../../images/books.png'
import alarm from '../../images/alarm.png'
import InProgress from '../../images/Time_atack_duotone.svg'
import completed from '../../images/Done_round_duotone.svg'
import wontDo from '../../images/close_ring_duotone-1.svg'


function TaskList() {
    const dispatch = useDispatch() 
    const getAllTask = useSelector(getTasklist)
    
    
    const taskClicked = (index) => {
      dispatch(SetEditIndex(index))
      const editTask = getAllTask[index]
      dispatch(setEditData(editTask))

    }



         
     const listTasks = getAllTask.map((task, index) => {
    const currentTask =
    <button className={` ${styles.listitem} ${task.stat === "working" ? styles.working :
    task.stat === "done" ? styles.done :
    task.stat === "notdoing" ? styles.notdoing : styles.noStatus}`}
            key={index} value={index} onClick={() => taskClicked(index)}
        >
        
<div className={styles.taskHeading}>
                <div className={styles.iconSize}>
                         {(() => {
        switch (task.icon) {
          case 'message':
            return  <img className={styles.iconPict} src={message} alt="message bubble"  />
 
          case 'laptop':
            return  <img className={styles.iconPict} src={laptop} alt="Working on laptop" />
          case 'coffee':
            return  <img className={styles.iconPict} src={coffee} alt="coffee cup" />
          case 'weightlift':
                return <img className={styles.iconPict} src={weightlift} alt="lifting weights" />
             case 'books':
                return <img className={styles.iconPict} src={books} alt="stack of books" />
             case 'alarm':
                return <img className={styles.iconPict} src={alarm} alt="red alarm clock" />
          default:
            return <img className={styles.iconPict} src={alarm} alt="red alarm clock" />

        }
      })()}
                    
            </div>
            <div className={styles.taskInfo}>
                <h3 className={styles.taskName}>{task.taskTitle}</h3>
                
            </div>
            <div className={ `${styles.statusbox}  ${task.stat === "working" ? styles.workingstatus :
            task.stat === "done" ? styles.donestatus :
                task.stat === "notdoing" ? styles.notdoingstatus : styles.noStatusstatus} `}>
            {task.stat !== "none" ?
              <div className={styles.statsize}>
                <img  src={task.stat === "working" ? InProgress :
                  task.stat === "done" ? completed : wontDo} alt="alarm clock" />
                </div>:
              <div style={{height: '20px', width: '20px'}}></div>
            }
            </div>
        </div>
        {console.log('task.stat', task.stat)}
                {console.log('task.stat', task.stat)}

            {task.stat === "none" &&
                <div className={styles.taskDetails}>
                    <h3 className={styles.taskDesc}>{task.task_description}</h3>
                </div>}
        </button>
    return currentTask
    });
    return (
        <>
            {listTasks} 
            
      
</>

            
    )
}

export default TaskList