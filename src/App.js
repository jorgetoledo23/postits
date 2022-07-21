import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AddForm from './components/AddForm'
import PostIt from './components/PostIt';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostItContainer from './components/PostItContainer';

export default function App() {

  const [ListPostIts, setListPostIts] = React.useState(JSON.parse(localStorage.getItem('PostIts')))

  const AddPostIt = (Title, Desc, Important) => {
    
    if(Title === "" && Desc === ""){

      const notify = () => toast.error("Los campos Titulo y Descripcion son obligatorios",{position: "top-right"});
      notify()

    }else{

      let Id = 1;
      if(ListPostIts.length !== 0){
       Id = parseInt(ListPostIts[ListPostIts.length-1].Id) + 1
      };  
      let newPost = { 
        Id : Id, 
        Titulo : Title, 
        Descripcion : Desc, 
        Importante : Important
      }
      setListPostIts(ListPostIts => ([...ListPostIts, newPost]))
      const notify = () => toast.success("Post It Agregado!",{position: "top-right"});
      notify()
    }
  }

  React.useEffect(() => {
    localStorage.setItem('PostIts', JSON.stringify(ListPostIts));
  }, [ListPostIts]);

  return (
        <div>
          <Navbar />
          <ToastContainer />
          <AddForm Add={ AddPostIt } />
          <PostItContainer PostIts={ListPostIts} />          
        </div> 
  );
}
