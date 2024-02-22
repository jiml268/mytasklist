import EditHeader from '../components/Header/EditHeader'
import DisplayHeader from '../components/Header/DisplayHeader'
import { useState } from 'react';


function TaskBoard() {
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