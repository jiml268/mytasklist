import Logo from '../../images/logo.svg';
import checkMark from '../../images/Done_round_duotone.svg'
import canc from '../../images/close_ring_duotone-1.svg'
import styles from '../../styleSheets/Header.module.css'; 
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { getCurrentTaskheading,  } from '../../redux/tasks/tasksSelectors'

function EditHeader({ handleChange }) {

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
            
             console.log('header will update') 
        }
       console.log('boardInfo', boardInfo)
       console.log('holdInfo', holdInfo)
handleChange()
       

    };

    return (
        <>
            

            <div className={styles.header}>
                <div className={styles.heading}>
                    <img className={styles.headerIcon} src={Logo} alt="logo" />
                   
                        <input className={styles.header_text} name="boardName" value = {holdInfo.boardName} onChange={changeHandler} />
            </div>
                <div className={styles.boardDesc}>
                    <input className={styles.boardDescText} name="boardDescription" value = {holdInfo.boardDescription} onChange={changeHandler} />
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