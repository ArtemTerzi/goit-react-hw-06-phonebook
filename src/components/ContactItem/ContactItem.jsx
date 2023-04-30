import PropTypes from 'prop-types';
import { Contact, ContactBtn } from './ContactItem.styled';

export const ContactItem = ({ name, id, number, removeContact }) => (
  <Contact name="contact">
    {name}: {number}
    <ContactBtn type="button" onClick={() => removeContact(id)} id={id}>
      Delete
    </ContactBtn>
  </Contact>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
