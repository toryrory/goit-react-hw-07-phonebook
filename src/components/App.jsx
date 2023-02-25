import { Container, Section1, Section2, Spinner } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
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
        {isLoading && !error && (
          <Spinner>
            <RotatingLines strokeColor="grey" width="35" />
          </Spinner>
        )}
        <ContactList />
      </Section2>
    </Container>
  );
}
