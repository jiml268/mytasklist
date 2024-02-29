import Logo from '../../images/logo.svg';
import checkMark from '../../images/Done_round_duotone.svg'
import canc from '../../images/close_ring_duotone-1.svg'
import styles from '../../styleSheets/Header.module.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { editHeader, getheader } from '../../redux/tasks/tasksOperators';
import { getCurrentTaskheading, getUserID,  } from '../../redux/tasks/tasksSelectors'

function EditHeader({ handleChange }) {
    const dispatch = useDispatch()
    const  getCurrentID = useSelector(getUserID)
    const boardInfo = useSelector(getCurrentTaskheading)
    const [holdInfo, setHoldInfo] = useState(boardInfo)
    
    const changeHandler = e => {
        const { name, value } = e.target;
        setHoldInfo({
            ...holdInfo,
            [name]: value,
        });
    }
 
    const closeTaskDetail = async (value) => {
        if (value === 'Save') {
            if (holdInfo !== boardInfo) {
                 const updatedHeader = {
                      task_id: holdInfo._id,
                      boardName: holdInfo.boardName,
                      boardDescription: holdInfo.boardDescription
                 }
                 const result = await dispatch(editHeader(updatedHeader))
                 if (result.meta.requestStatus === "fulfilled") {
                      const currentID = { user_id: getCurrentID }
                     await dispatch(getheader(currentID))
                 }
             
             }
            
        }
      
handleChange()
       

    };

    return (
        <>
            

            <div className={styles.header}>
                <h3 className={`${styles.boardDescText} ${styles.heading}`} style={{marginBottom: '10px'}}> Edit Board Name and/or Board Description</h3>
                <div className={styles.heading}>
                    <img className={styles.headerIcon} src={Logo} alt="logo" />
                   
                    <input className={`${styles.header_text} ${styles.editFields}`} name="boardName" value = {holdInfo.boardName} onChange={changeHandler} />
            </div>
                <div className={styles.boardDesc}>
                     <div className={styles.headerIcon}></div> 
                    <input className={`{styles.boardDescText}  ${styles.editFields}`} name="boardDescription" value = {holdInfo.boardDescription} onChange={changeHandler} />
                </div>
            </div>
            <div className={styles.pageButtons}>
                        <button className={styles.deleteButton} onClick={() => closeTaskDetail("canc")}>
                            <p className={styles.deleteText}>Cancel</p>
                           <img className={styles.deleteicon} src={canc} alt="delete item" />
                        </button>
                         <button className={styles.saveButton} onClick={() => closeTaskDetail("Save")}>
                            <p className={styles.saveText}>Save</p>
                           <img className={styles.saveicon} src={checkMark} alt="save changes" />
                        </button>
                    </div>  
            
        </>
    )
    }


export default EditHeader