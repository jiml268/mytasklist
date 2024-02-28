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
import { getTasklist, geteditIndex } from '../redux/tasks/tasksSelectors'
import {editTask, deleteTask, getTasks} from '../redux/tasks/tasksOperators'

function TaskEdit({ modalOpen }) {
    const dispatch = useDispatch()


    // const [taskData  = useSelector(getEditData)
    const getAllTask = useSelector(getTasklist)
    const currentTask = useSelector(geteditIndex)
    const currentEditTask = useSelector(getEditData)
    const [taskData, setTaskdata] = useState({})
    


 useEffect(() => {
       setTaskdata(currentEditTask)
    }, [currentEditTask])


    const closeTaskDetail = async (value) => {

        if (value === 'Save') {
               if (taskData !== getAllTask[currentTask]) {
                   const updatedTask = {
                        
                       task_id: taskData._id,
                       user_id: taskData.user_id,
                      taskTitle: taskData.taskTitle,
                       task_description: taskData.task_description,
                       icon: taskData.icon,
                      stat: taskData.stat,
                   }
                   const result = await dispatch(editTask(updatedTask))
                   if (result.meta.requestStatus === "fulfilled") {
                     await dispatch(getTasks({ user_id: taskData.user_id}))
                 }
             
               }
        }
        if (value === 'Delete') {
           const deleteATask = {
                       task_id: taskData._id,
                   }
            const result = await dispatch(deleteTask(deleteATask))
            console.log(result)
                   if (result.meta.requestStatus === "fulfilled") {
                       await dispatch(getTasks({ user_id: taskData.user_id }))
                 }
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