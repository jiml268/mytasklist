import { useDispatch,  } from 'react-redux';
import { SetEditIndex } from "../redux/tasks/tasksSlice";
import { useSelector } from 'react-redux';
import { getUserID, } from '../redux/tasks/tasksSelectors'

function TaskEdit() {
     const  userID = useSelector(getUserID)
    const dispatch = useDispatch()
     
   
    
const addNewTask = () => {
              dispatch(SetEditIndex(null))

}



    
    return (
        <div>
            <h1> TaskEdit</h1>
            <h2> Id is {userID}</h2>
            <button 
        onClick={addNewTask}>go to showalltasks</button>
            </div>

        )
}


export default TaskEdit