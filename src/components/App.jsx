
import Wrapper from "./Wrapper";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef, useState } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three";



  export const App = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
    useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE
        
        })
      );
    }
     return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  
    return (
 
      <Wrapper ref={vantaRef}>
        <ToastContainer />
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter />
          <ContactList />
      </Wrapper>
  );
}