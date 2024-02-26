import EditHeader from '../components/Header/EditHeader'
import DisplayHeader from '../components/Header/DisplayHeader'
import TaskList from '../components/TaskList/TaskList';
import TaskEdit from './TaskEdit';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setID } from "../redux/tasks/tasksSlice";
import { getheader, getTasks, } from '../redux/tasks/tasksOperators'
import { getTasklist, geteditIndex} from '../redux/tasks/tasksSelectors'


function TaskBoard() {  

    const dispatch = useDispatch()
    const { id } = useParams()
        const getAllTasks = useSelector(getTasklist)
const taskToBeEdited = useSelector(geteditIndex)
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

    const [editHeader, seteditHeader] = useState(false)

   
    const handleChange = () => {

        seteditHeader(editHeader => !editHeader);
  };
    return (
        <>
            {!editHeader ? <DisplayHeader handleChange={handleChange} /> : <EditHeader handleChange={handleChange} />}
            {console.log('taskToBeEdited', taskToBeEdited)}
                        {console.log('!taskToBeEdited', !taskToBeEdited)}
            {console.log(typeof taskToBeEdited)}
            {typeof taskToBeEdited !== 'number' && getAllTasks.length > 0 && < TaskList />}
             {typeof taskToBeEdited !== 'number' && getAllTasks.length  === 0 &&  <h3>No task to display</h3>}
            {typeof taskToBeEdited === 'number' && <TaskEdit />}
        </>
    )
}


export default TaskBoard