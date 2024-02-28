import { useDispatch, useSelector  } from 'react-redux';
import { SetEditIndex } from "../redux/tasks/tasksSlice";
import Header from '../components/EditTask/Header/Header'
import TaskButton from '../components/EditTask/TaskButton/TaskButton'
import TaskDetail from '../components/EditTask/TaskDetail/TaskDetail'
import TaskIcon from '../components/EditTask/TaskIcon/TaskIcon'
import TaskStatus from '../components/EditTask/TaskStatus/TaskStatus'
import styles from '../styleSheets/EditTask.module.css'; 
import { Dialog } from "@mui/material";
import { getEditData } from '../redux/tasks/tasksSelectors'
import { useState, } from 'react';
import { useEffect } from 'react';


function TaskEdit({ modalOpen }) {
    const dispatch = useDispatch()


    // const [taskData  = useSelector(getEditData)
  
    const currentEditTask = useSelector(getEditData)
    const [taskData, setTaskdata] = useState({})
    


 useEffect(() => {
       setTaskdata(currentEditTask)
    }, [currentEditTask])


    const closeTaskDetail = async (value) => {

        if (value === 'Save') {
            console.log('save')
        }
 if (value === 'Delete') {
            console.log('Delete')
        }

     dispatch(SetEditIndex(null))
}
    
    return (
         <Dialog
       
        open={modalOpen}
        onClose={closeTaskDetail}
        aria-labelledby="max-width-dialog-title"
      >
            
    
            <div className={styles.modal_container}>
                 <div className={styles.editPage}>
                    <Header closeTaskDetail={closeTaskDetail} />
            <TaskDetail taskData={taskData} setTaskdata={setTaskdata}    />
            <TaskIcon  taskData={taskData} setTaskdata={setTaskdata} />
             <TaskStatus taskData={taskData} setTaskdata={setTaskdata}/>
             <TaskButton closeTaskDetail={closeTaskDetail} />
                </div>
                </div>
  </Dialog>
        )
}


export default TaskEdit