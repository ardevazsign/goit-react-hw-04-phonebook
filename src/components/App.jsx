
import { useState, useEffect } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


export const App = () => {
  const savedContacts = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(
    savedContacts !== null ? JSON.parse(savedContacts) : initialContacts
  );
  const [filter, setFilter] = useState('');

  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // homework 3-1

  //  componentDidMount() {

  //     const savedContacts = localStorage.getItem('contacts');

  //     if (savedContacts !== null) {
  //       this.setState({ contacts: JSON.parse(savedContacts) });
  //     } else {
  //       this.setState({
  //         contacts: [
  //           { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //           { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //           { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //           { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //         ],
  //       });
  //     }
  //   }
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  // componentDidUpdate(_preveProp, prevState) {
  //   const { contacts } = this.state;

  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }
  const addContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
    // contacts: prevState.contacts.filter(contact => contact.id !== id),
  };

  // const  setFilter = filterValue => {
  //     this.setState({
  //       filter: filterValue,
  //     });
  //   };

  const filterContact = () => {
    // const { contacts, filter } = this.state;
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  // const { contacts, filter } = this.state;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
         
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        filterContact={filterContact}
        deleteContact={deleteContact}
      />
    </div>
  );  
};
