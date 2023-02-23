import { useDispatch, useSelector } from 'react-redux';
import { setFilterContact } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Label } from './ContactFilter.styled';
import { Input } from 'components/Form/ContactForm.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

 const handleFilter = e => {
   dispatch(setFilterContact(e.currentTarget.value))
 };
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={handleFilter} />
    </Label>
  );
};

