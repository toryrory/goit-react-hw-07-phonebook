import React from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFiltredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);
  
  return (
    <ul>
      {filtredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
};
