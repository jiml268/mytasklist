import { useSelector } from 'react-redux';
import { useState, } from 'react';
import EditHeader from '../components/Header/EditHeader'
import DisplayHeader from '../components/Header/DisplayHeader'
import { getTasklist, } from '../redux/tasks/tasksSelectors'
import TaskList from '../components/TaskList/TaskList';
import styles from '../styleSheets/TaskList.module.css'; 

function ShowAllTasks() {
    const getAllTasks = useSelector(getTasklist)
    const [editHeader, seteditHeader] = useState(false)
    
    const handleChange = () => {

        seteditHeader(editHeader => !editHeader);
  };

    
    return (
        <div className={styles.showTaskBox}>
{!editHeader ? <DisplayHeader handleChange={handleChange} /> : <EditHeader handleChange={handleChange} />}
 {typeof taskToBeEdited !== 'number' && getAllTasks.length > 0 && < TaskList />}
             {typeof taskToBeEdited !== 'number' && getAllTasks.length  === 0 &&  <h3>No task to display</h3>}
            
            </div>

        )
}


export default ShowAllTasks