
import ShowAllTasks from './ShowAllTasks';
import TaskEdit from './TaskEdit';
import {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setID } from "../redux/tasks/tasksSlice";
import {   getModalopen } from '../redux/tasks/tasksSelectors'
import { getheader, getTasks, } from '../redux/tasks/tasksOperators'

function TaskBoard() {  
    const showModal = useSelector(getModalopen)
       

    const dispatch = useDispatch()
    const { id } = useParams()
        
    useEffect(() => {
        const currentUserID = id ? id : 1;
        dispatch(setID(currentUserID))
        const fetchTitle = async () => {
            const currentID = { user_id: id ? id : 1 }

            await dispatch(getheader(currentID));

            await dispatch(getTasks(currentID));
     }     
       fetchTitle()
    // make sure to catch any error
    .catch(console.error);
    }, [dispatch, id, ])

   
   
    return (
        <>
                <ShowAllTasks /> 
                <TaskEdit
                modalOpen={showModal}/>
            
        </>
    )
}


export default TaskBoard