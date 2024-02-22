import ShowAllTasks from "./ShowAllTasks"
import TaskEdit from "./TaskEdit"
import { useSelector } from 'react-redux';
import { getUserID,  } from '../redux/tasks/tasksSelectors'

function TaskBoard() {
        const  userID = useSelector(getUserID)
    console.log('id', userID)
    
    return (
        <>
            {userID === 1 && <ShowAllTasks />}
            {userID === 2 && <TaskEdit />}

        </>
    )
}


export default TaskBoard