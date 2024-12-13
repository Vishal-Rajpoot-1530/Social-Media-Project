
import { useContext } from 'react'
import css from './Card.module.css'
import { Sidebar_store } from '../store/Sidebar_store'




const Card = () => {

    const { postlist, sidebar, setpostlist } = useContext(Sidebar_store);
    if (sidebar === "Home")
        return (
            <div className={css.containerdiv} >
                {postlist.map((i) => (
                    <div key={i.id} className={css.cardcontainer}>
                        <div className={css.card}>
                            <div className={css.bandage} ><button onClick={() => setpostlist("delete", i.id)}>X</button></div>
                            <div className={css.cardcontent} >
                                <h2 className={css.cardtitle} >{i.title} </h2>
                                <p className={css.carddescription}>
                                    {i.body}
                                </p>
                                {i.tags.map((t) => (<button key={t} className={css.button} > #{t}</button>))}
                                <div className={css.reactions}>
                                    <span>likes:{i.reactions.likes}</span>
                                    <span>dislikes:{i.reactions.dislikes}</span>
                                    <span>view:{i.views}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
}
export default Card