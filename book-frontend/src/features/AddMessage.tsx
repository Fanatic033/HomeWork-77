import {Button} from '@mui/material';
import {useState} from 'react';
import Modal from '../UI/Modal/Modal.tsx';
import BookForm from './book-contacts/components/BookForm.tsx';
import {useAppDispatch, useAppSelector} from '../app/hooks.ts';
import {MessageMutation} from '../types.ts';
import {createMessage, fetchBooks} from './book-contacts/BookThunks.ts';
import {selectFetching} from './book-contacts/BookSlice.ts';

const AddMessage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(selectFetching);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onFormSubmit = async (messageMutation: MessageMutation) => {
    await dispatch(createMessage(messageMutation));
    await dispatch(fetchBooks());
    closeModal();
  };

  return (
    <div style={{display: 'flex'}}>
      <Button onClick={() => openModal()} className={'ms-auto me-3'} variant="contained">
        Write Post
      </Button>
      <Modal title={'New Post'} show={showModal} onClose={closeModal}>
        <BookForm onSubmit={onFormSubmit} isLoading={isFetching}/>
      </Modal>
    </div>
  );
};

export default AddMessage;