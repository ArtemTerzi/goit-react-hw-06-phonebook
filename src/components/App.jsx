import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const createContact = contact => dispatch(addContact(contact));
  const removeContact = id => dispatch(deleteContact(id));

  const handleChange = ({ target: { value } }) => dispatch(changeFilter(value));

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
      <ContactForm contacts={contacts} onSubmit={createContact} />
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
