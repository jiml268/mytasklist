import styles from '../../../styleSheets/EditTask.module.css'; 
import checkMark from '../../../images/Done_round_duotone.svg'
import trash from '../../../images//Trash.svg'
function TaskButton({ closeTaskDetail }) {
 return (
     <>
        <div className={styles.editPage}>
      <div className={styles.pageButtons}>
                        <button className={styles.deleteButton} onClick={() => closeTaskDetail("Delete")}>
                            <p className={styles.deleteText}>Delete</p>
                           <img className={styles.deleteicon} src={trash} alt="delete item" />
                        </button>
                         <button className={styles.saveButton} onClick={() => closeTaskDetail("Save")}>
                            <p className={styles.saveText}>Save</p>
                           <img className={styles.saveicon} src={checkMark} alt="save changes" />
                        </button>
                 </div> 
             </div>
     </>
 )
      }


export default TaskButton