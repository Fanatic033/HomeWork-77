import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {CssBaseline} from '@mui/material';
import {Provider} from 'react-redux';
import {store} from './app/store.ts';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <CssBaseline/>
    <App/>
  </Provider>
);
