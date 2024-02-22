import { useDispatch,  } from 'react-redux';
import { setID } from "../redux/tasks/tasksSlice";
import { useSelector } from 'react-redux';
import { getUserID, } from '../redux/tasks/tasksSelectors'

function ShowAllTasks() {
    const dispatch = useDispatch()
     const  userID = useSelector(getUserID)
   
    
const addNewTask = () => {
      dispatch(setID(2))
}



    
    return (
        <div>
            <h1> ShowAllTasks</h1>
            <h2> Id is {userID}</h2>
            <button 
        onClick={addNewTask}>go to taskedit</button>
            </div>

        )
}


export default ShowAllTasks