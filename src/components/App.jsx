import { Container, Section1, Section2 } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section1>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section1>
      <Section2>
        <h2>Contacts</h2>
        <ContactFilter />
        {isLoading && !error && <p>Loading contacts...</p>}
        <ContactList />
      </Section2>
    </Container>
  );
}
