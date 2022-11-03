import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactsFilter } from 'components/ContactsFilter';
import { ContactsForm } from 'components/ContactsForm';
import { ContactsList } from 'components/ContactsList';

import {
  ContainerPhoneBook,
  TitlePhoneBook,
} from 'components/PhoneBook/PhoneBook.styled';

export const PhoneBook = () => {
  const contacts = useSelector(getContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerPhoneBook>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <ContactsForm />
      <TitlePhoneBook>Contacts</TitlePhoneBook>

      {contacts.length > 0 && !error && !loading && (
        <>
          <ContactsFilter />
          <ContactsList />
        </>
      )}
      {loading && (
        <RotatingLines
          strokeColor="#423bcf"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {contacts.length === 0 && !loading && (
        <p>There are no contacts &#x1f609;</p>
      )}
      {error && <p>Oops, something went wrong</p>}
    </ContainerPhoneBook>
  );
};
