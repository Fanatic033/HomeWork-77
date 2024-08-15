import './App.css';
import AppToolbar from './UI/AppToolBar/AppToolBar.tsx';
// import BookForm from './features/book-contacts/components/BookForm.tsx';
import BookContacts from './features/book-contacts/BookContacts.tsx';

const App = () => (
  <>
    <header>
      <AppToolbar/>
      {/*<BookForm/>*/}
      <BookContacts/>
    </header>
  </>
);

export default App;
