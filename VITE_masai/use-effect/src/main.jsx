import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { NotesProvider } from './components/Notes/ContextAPI/Context';
import store from './components/Redux/Reducer.jsx';
import App1 from './App1.jsx';
import './App.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <NotesProvider>
      <BrowserRouter>
        <App1 />
      </BrowserRouter>
    </NotesProvider>
  </Provider>
);
