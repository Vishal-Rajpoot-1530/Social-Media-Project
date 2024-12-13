import { useContext } from 'react'
import css from './Side_Bar.module.css'
import { Sidebar_store } from '../store/Sidebar_store';
  
const Side_Bar = () => {

    const {  setsidebar}=useContext(Sidebar_store);
    const handleOnClick=(e)=>{
        setsidebar(e);

    }

    return (
        <div className={css.sidebar1}>
            <div className={css.sidebar} id={css.sidebar}>
                <div className={css.sidebarheader}>
                    <h2>My Logo</h2>
                    <button id={css.toggleBtn} className={css.toggleBtn}>&#9776;</button>
                </div>
                <ul className={css.menu}>
                    <li onClick={()=>handleOnClick("Home")}>  <a>Home</a> </li>
                    <li onClick={()=>handleOnClick("Creat Post")}> <a>Creat Post</a>  </li>
                      
                </ul>
            </div>
             

        </div>
    )
}

export default Side_Bar