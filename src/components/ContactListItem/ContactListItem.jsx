import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <li className={css.contactListItem}>
      <p>{filteredContact.name} :</p>
      <p>{filteredContact.number}</p>
      <button className={css.deleteBtn} onClick={handleDelete} >Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};