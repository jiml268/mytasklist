import EditHeader from '../components/Header/EditHeader'
import DisplayHeader from '../components/Header/DisplayHeader'
import TaskList from '../components/TaskList/TaskList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setID } from "../redux/tasks/tasksSlice";
import { getheader, getTasks, } from '../redux/tasks/tasksOperators'
import { getTasklist, } from '../redux/tasks/tasksSelectors'


function TaskBoard() {  

    const dispatch = useDispatch()
    const { id } = useParams()
    console.log('id', id)
        const getAllTasks = useSelector(getTasklist)

    useEffect(() => {
        console.log('TaskBoard useeffect ran')
        const currentUserID = id ? id : 1;
        dispatch(setID(currentUserID))
        const fetchTitle = async () => {
            const currentID = { user_id: id ? id : 1 }
                console.log('currentID', currentID)

            await dispatch(getheader(currentID));
                        console.log('currentID', currentID)

            const listOfTask = await dispatch(getTasks(currentID));
            console.log('listOfTask', listOfTask)
     }     
       fetchTitle()
    // make sure to catch any error
    .catch(console.error);
    }, [dispatch, id, ])

    const [editHeader, seteditHeader]  =  useState(false)
   
    const handleChange = () => {
                console.log('handleChange')

        seteditHeader(editHeader => !editHeader);
        console.log('editHeader', editHeader)
  };
    return (
        <>
            {!editHeader? <DisplayHeader handleChange={handleChange} />:<EditHeader handleChange={handleChange} />}
            {getAllTasks.length > 0 ? < TaskList /> : <h3>No task to display</h3>}
        </>
    )
}


export default TaskBoard