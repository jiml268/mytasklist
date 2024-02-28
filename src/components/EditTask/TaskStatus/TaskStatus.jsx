import styles from '../../../styleSheets/EditTask.module.css'; 
import InProgress from '../../../images/Time_atack_duotone.svg'
import completed from '../../../images/Done_round_duotone.svg'
import wontDo from '../../../images/close_ring_duotone-1.svg'
import checkMark from '../../../images/Done_round_duotone.svg'

function TaskStatus({ taskData, setTaskdata, }) {
    
     const handleOnClick = name => {
       
        setTaskdata({
            ...taskData,
            stat: name,
        });
    };

    return (
     <div>
    <div className={styles.statussection} >
                        <p className={styles.taskInfoName}>status</p>
                        <div className={styles.taskstatus}>
                        <button className={`${styles.statusButton} ${taskData.stat === 'working' ? styles.statusButtonactive : styles.statusButtonnotactive}`} onClick={() => handleOnClick('working')}>
                    <div className={styles.statusiconbox} style={{ backgroundColor: "#F5D565" }}>
                                <img className={styles.statusicon} src={InProgress} alt="In Progress" /> 
                     </div>           
                                <p className={styles.statustext}>In Progress</p>
                        <div className={taskData.stat === 'working' ? styles.checkBoxActive  : styles.checkBoxNoActive} >
                        <img className={styles.checkMark} src={checkMark} alt="check mark" /> 
 
                       

                    </div>
                </button>
                 <button className={`${styles.statusButton} ${taskData.stat === 'done' ? styles.statusButtonactive  : styles.statusButtonnotactive}`} onClick={() => handleOnClick('done')} >
                    <div className={styles.statusiconbox} style={{ backgroundColor: "#32D657" }}>
                                <img className={styles.statusicon} src={completed} alt="Compleated" /> 
                                 </div>
                        <p className={styles.statustext}>Completed</p>
                        <div className={taskData.stat === 'done' ? styles.checkBoxActive  : styles.checkBoxNoActive} >
                        <img className={styles.checkMark} src={checkMark} alt="check mark" /> 
 
                       

                    </div>
                </button>
                 <button className={`${styles.statusButton} ${taskData.stat === 'notdoing' ? styles.statusButtonactive  : styles.statusButtonnotactive}`} onClick={() => handleOnClick('notdoing')}>
                    <div className={styles.statusiconbox} style={{ backgroundColor: "#DD524C" }}>
                                <img className={styles.statusicon} src={wontDo} alt="Won’t do" /> 
                                 </div>
                        <p className={styles.statustext}>Won’t do</p>
                                <div className={taskData.stat === 'notdoing' ?  styles.checkBoxActive  : styles.checkBoxNoActive} >
                        <img className={styles.checkMark} src={checkMark} alt="check mark" /> 
 
                       

                    </div>
                </button>
</div>
                    </div>
                
            </div>
 )
      }


export default TaskStatus