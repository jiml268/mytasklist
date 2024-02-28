import styles from '../../../styleSheets/EditTask.module.css'; 
import laptop from '../../../images/laptop.png'
import message from '../../../images/message.png'
import coffee from '../../../images/coffee.png'
import weightlift from '../../../images/weightlift.png'
import books from '../../../images/books.png'
import alarm from '../../../images/alarm.png'

function TaskIcon({ taskData, setTaskdata, }) {

const pickIcon = name => {
      setTaskdata({
            ...taskData,
            icon: name,
        });

    };

 return (
    <div className={styles.taskicons}>
                        <p className={styles.taskInfoName}>Icon</p>
                        <div className={styles.iconList}>
                        <button  className={taskData.icon === 'laptop' ? styles.iconBoxActive  : styles.iconBoxNoActive} onClick={() => pickIcon("laptop")} >
                       
                            <img className={styles.iconPict} src={laptop} alt="Working on laptop"  />
                      
</button>
                         <button className={taskData.icon === 'message' ? styles.iconBoxActive  : styles.iconBoxNoActive} onClick={() => pickIcon("message")}>
                        
                            <img className={styles.iconPict} src={message} alt="message bubble" />
                      
</button>
                         <button className={taskData.icon === 'coffee' ? styles.iconBoxActive  : styles.iconBoxNoActive} onClick={() => pickIcon("coffee")}>
                        
                            <img className={styles.iconPict} src={coffee} alt="coffee cup" />
                       
</button>
                         <button className={taskData.icon === 'weightlift' ? styles.iconBoxActive  : styles.iconBoxNoActive} onClick={() => pickIcon("weightlift")}>
                        
                            <img className={styles.iconPict} src={weightlift} alt="lifting weights" />
                       
</button>
                         <button className={taskData.icon === 'books' ? styles.iconBoxActive  : styles.iconBoxNoActive} onClick={() => pickIcon("books")}>
                        
                            <img className={styles.iconPict} src={books} alt="stack of books" />
                        
</button>
                         <button className={taskData.icon === 'alarm' ? styles.iconBoxActive  : styles.iconBoxNoActive} onClick={() => pickIcon("alarm")}>
                         
                            <img className={styles.iconPict} src={alarm} alt="red alarm clock" />
                       
                            </button>
                            </div>
                    </div>
 )
      }


export default TaskIcon