import Logo from '../../images/logo.svg';
import EditSVG from '../../images/Edit_duotone.svg';
import styles from '../../styleSheets/Header.module.css'; 
import {  useSelector } from 'react-redux';

import { getCurrentTaskheading,  } from '../../redux/tasks/tasksSelectors'

function DisplayHeader({ handleChange }) {

const boardInfo =   useSelector(getCurrentTaskheading)
    return (
        <>
            

            <div className={styles.header}>
                <div className={styles.heading}>
                    <img className={styles.headerIcon} src={Logo} alt="logo" />
                        <h1 className={styles.header_text}>{boardInfo.boardName}</h1>
                    <button className={styles.headerEdit} onClick={handleChange}><img src={EditSVG} alt="Edit Heading" /></button>
            </div>
                <div className={styles.boardDesc}>
                    <h2 className={styles.boardDescText}>{boardInfo.boardDescription}</h2>
                </div>
            </div>
        </>
    )
    }


export default DisplayHeader