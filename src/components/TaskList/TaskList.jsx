import {useSelector } from 'react-redux';

import { getTasklist,   } from '../../redux/tasks/tasksSelectors'



function TaskList() {
    const getCurrentID = useSelector(getTasklist)
    console.log('getCurrentID', getCurrentID)

 const listTasks = getCurrentID.map((task, index) => {
    const currentTask =
    <button 
            key={index} value={index}
        >
        
<div >
           
            <div >
                <h3 >{task.taskTitle}</h3>
                
            </div>
           </div>
        </button>
    return currentTask
    })
    ;return (
        <>
            {listTasks} 
            
      
</>

            
    )
}

export default TaskList