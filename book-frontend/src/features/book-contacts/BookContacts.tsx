import {Box, CircularProgress, Grid, Typography} from '@mui/material';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {fetchBooks} from './BookThunks.ts';
import {selectContacts, selectLoading} from './BookSlice.ts';
import BookItem from './components/BookItem.tsx';

const BooksContacts = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const loader = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loader) {
    return (
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress/>
      </Box>
    );
  }
  return (

    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" sx={{marginLeft: '20px'}}>Гостевая Книга</Typography>
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
