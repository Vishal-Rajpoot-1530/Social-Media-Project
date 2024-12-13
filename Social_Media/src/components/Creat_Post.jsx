
import { useContext, useRef } from 'react'
import css from './Creat_Post.module.css'
import { Sidebar_store } from '../store/Sidebar_store';



const Creat_Post = () => {
    const {setpostlist,sidebar,setsidebar}=useContext(Sidebar_store);
   const username=useRef();
   const title=useRef(); 
   const description=useRef();
   const tages=useRef();

   const handlesubmit=(event)=>{
    event.preventDefault();
    const tag=tages.current.value.split(" ");
    const sendData={
      id: username.current.value,
      title: title.current.value,
      content: description.current.value,
      tages: tag,  
    }
    setpostlist("post" ,sendData);
    username.current.value="";
     title.current.value="";
     description.current.value="";
     tages.current.value="";
     setsidebar("Home");

   }


   if(sidebar==="Creat Post")
    return (
        <div className={css.creatpost}>
            <h3>Creat Post <hr /></h3>

            <form  onSubmit={handlesubmit}>

                <label htmlFor="username">Username:</label>
                <input ref={username} type="text" name="username" id="username" placeholder='enter username' required/>
                <label htmlFor="title">Title:</label>
                <input ref={title} type="text" name="title" id="title" placeholder='enter title here' required/>
                <label htmlFor="description">Description</label>
                <textarea ref={description} type="input_area" name="description" id="description" placeholder='enter description hare' />
                <label htmlFor="tages">Tages
                </label>
                <input ref={tages}  type="text" name="tages" id="tages" placeholder='enter tages' />
                <button type='submit'>Post</button>
            </form>

        </div>
    )
}

export default Creat_Post