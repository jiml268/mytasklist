import styles from '../../../styleSheets/EditTask.module.css'; 
 import closeX from '../../../images/close_ring_duotone-1.svg'

function Header({ closeTaskDetail }) {
 return (
     <>
       
     <div className={styles.header}>
                <h3 className={styles.header_text}>Task details</h3>
                <button className={styles.headerbutton} onClick={() => closeTaskDetail("closed")}><img className={styles.closeImage} src={closeX} alt="close page" /></button>

             </div>

     </>
 )
      }


export default Header