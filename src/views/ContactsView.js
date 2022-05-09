import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import ContactsList from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import ContactsFilter from 'components/ContactsFilter';
import Loader from 'components/Loader';
import { contactsOperations, contactsSelectors } from '../redux/contacts';


const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
        <ContactForm/>  
        <div style={barStyles}>
              
            <ContactsFilter />

            {isLoadingContacts && <Loader/>}
        </div>

        <ContactsList />

    </Container>
  );
}