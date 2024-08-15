import './App.css';
import AppToolbar from './UI/AppToolBar/AppToolBar.tsx';
import BookContacts from './features/book-contacts/BookContacts.tsx';
import AddMessage from './features/AddMessage.tsx';

const App = () => (
  <>
    <header>
      <AppToolbar/>
      <AddMessage/>
      <BookContacts/>
    </header>
  </>
);

export default App;
