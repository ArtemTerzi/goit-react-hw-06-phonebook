import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from 'components/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    const contactList = JSON.parse(localStorage.getItem('contacts'));
    if (contactList) setContacts(contactList);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const contactList = JSON.stringify(contacts);
    if (contactList) localStorage.setItem('contacts', contactList);
  }, [contacts]);

  const addContact = contact => {
    setContacts(prev => [...prev, { ...contact, id: nanoid() }]);
  };

  const removeContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'filter':
        setFilter(value);
        break;
      default:
        console.log(`Name - ${name} is not defined`);
    }
  };

  const getFilterNormalize = () => filter.toLowerCase();

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(getFilterNormalize())
    );

  return (
    <div
      style={{
        margin: 24,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={addContact} />
      <h2
        style={{
          fontSize: 28,
        }}
      >
        Contacts
      </h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        contacts={contacts}
        filteredContacts={getFilteredContacts()}
        removeContact={removeContact}
      />
    </div>
  );
};
