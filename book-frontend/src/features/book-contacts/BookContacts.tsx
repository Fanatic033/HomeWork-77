import {Grid, Typography} from '@mui/material';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {fetchBooks} from './BookThunks.ts';
import {selectContacts} from './BookSlice.ts';
import BookItem from './components/BookItem.tsx';

const BooksContacts = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch,fetchBooks]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Products</Typography>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        {contacts.map((contact) => (
          <BookItem
            key={contact.id}
            id={contact.id}
            author={contact.author}
            message={contact.message}
            image={contact.image}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default BooksContacts;
