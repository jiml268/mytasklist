import EditHeader from '../components/Header/EditHeader'
import DisplayHeader from '../components/Header/DisplayHeader'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,  } from 'react-redux';
import { setID } from "../redux/tasks/tasksSlice";
import {getheader, } from '../redux/tasks/tasksOperators'

function TaskBoard() {  
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        console.log('TaskBoard useeffect ran')
        const currentUserID = id ? id : 1;
        dispatch(setID(currentUserID))
        const fetchTitle = async () => {
        const currentID = { user_id:  id ? id : 1 }
        const result =  await dispatch(getheader(currentID));
     console.log('result from fetchTitle ', result.payload.code)
     }     
       fetchTitle()
    // make sure to catch any error
    .catch(console.error);
    }, [dispatch, id])
    
    const [editHeader, seteditHeader]  =  useState(false)
   
    const handleChange = () => {
                console.log('handleChange')

        seteditHeader(editHeader => !editHeader);
        console.log('editHeader', editHeader)
  };
    return (
        <>
            {!editHeader? <DisplayHeader handleChange={handleChange} />:<EditHeader handleChange={handleChange} />}

        </>
    )
}


export default TaskBoard