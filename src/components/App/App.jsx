import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';
import { ListTitle, Wrapper } from './App.styled';

export const App = () => (
  <Wrapper>
    <h1>Phonebook</h1>
    <ContactForm />
    <ListTitle>Contacts</ListTitle>
    <Filter />
    <ContactList />
  </Wrapper>
);
