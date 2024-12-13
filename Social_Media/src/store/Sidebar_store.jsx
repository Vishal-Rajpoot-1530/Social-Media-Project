import { createContext, useEffect, useReducer, useState } from "react";
export const Sidebar_store = createContext();

const reducer = (posts, action) => {
  let newValue = posts;
  if (action.type === "post") {

    newValue = [action.payload.data, ...posts];


  } else if (action.type === "delete") {
    newValue = posts.filter((item) => item.id != action.payload.data);

  } else if(action.type==="fetch"){
     
    newValue=  action.payload.data;
  }

  return newValue;
}



const StoreProvider = ({ children }) => {
  const posts = [
    ];
  const [postlist, dispach] = useReducer(reducer, posts);
   
 


  const setpostlist = (type, data) => {
    const action1 = {
      type: type,
      payload: {
        data
      }
    }

    dispach(action1);
  }
  const [sidebar, setsidebar] = useState("Home");
  // const [postlist, setpostlist] = useState([
  //   {
  //     id: "1",
  //     title: "title",
  //     content: "content",
  //     tages: ["tages", "tages1", "tages3"]
  //   },
  //   {
  //     id: "2",
  //     title: "title",
  //     content: "content",
  //     tages: ["tages", "tages1", "tages3"]
  //   },
  //   {
  //     id: "3",
  //     title: "title",
  //     content: "content",
  //     tages: ["tages", "tages1", "tages3"]
  //   }
  // ])

  // const posthandle = (post) => {

  //   const newPostList = [post, ...postlist];
  //   setpostlist(newPostList);
  //   setsidebar("Home");

  // }
  // const deletHandle = (id) => {
  //   const newPostList = postlist.filter((item) => item.id != id);
  //   setpostlist(newPostList);
  //   // console.log(newPostList);

  // }





  return (

    <Sidebar_store.Provider value={{ sidebar, setsidebar, postlist, setpostlist }}>

      {children}

    </Sidebar_store.Provider>

  )
}

export default StoreProvider