import { useContext, useDebugValue, useEffect, useState } from "react"
import { Sidebar_store } from "../store/Sidebar_store"
import css from './Side_Bar.module.css'
import LoadingSpinner from "./LoadingSpinner"







const WelcomMassage = () => {
    const { postlist, sidebar, setsidebar, setpostlist } = useContext(Sidebar_store);
    const [search, setsearch] = useState(false)
    useEffect(() => {
        setsearch(true);
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then((res) =>{
                 setpostlist("fetch", res.posts);
                setsearch(false)
            });
        
        
    }, []);



    if (postlist.length === 0 && sidebar == "Home")
        return (
            <div className={css.welcome}  >
                {search ? <LoadingSpinner /> : <p> There are no post ....</p>}



            </div>
        )
}

export default WelcomMassage