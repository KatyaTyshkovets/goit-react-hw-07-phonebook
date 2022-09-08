
import Wrapper from "./Wrapper";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";


 




  export const App = () => {
    
    
  
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter  />
      <ContactList  />
    </Wrapper>
  );
}