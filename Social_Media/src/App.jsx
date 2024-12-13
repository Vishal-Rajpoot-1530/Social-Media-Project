
import Side_Bar from './components/Side_bar';
import Header from './components/Header';
import Card from './components/Card';
import Creat_Post from './components/Creat_Post'
import Footer from './components/Footer'
import './App.css'
import StoreProvider, { Sidebar_store } from './store/Sidebar_store';
import WelcomMassage from './components/WelcomMassage'; 
import { useContext } from 'react';

function App() {

  


  return (
    <StoreProvider>
      <div className="appcontainer">
        <Header></Header>
        <div className="appbody">

          <Side_Bar></Side_Bar>
          <div className="contentarea">
            <WelcomMassage></WelcomMassage>
              <Card ></Card> <Creat_Post ></Creat_Post> 
            
            
          </div>

        </div>
        <Footer></Footer>
      </div>
    </StoreProvider>
  )
}

export default App
