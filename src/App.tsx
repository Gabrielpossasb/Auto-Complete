import { SearchBar } from './components/Barra/SearchBar';
import React from 'react';

import Searchs from './db.json'
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

Modal.setAppElement('#root');


export function App() {
  return (
    <div>
      <SearchBar data={Searchs} title={''} id={0} />
      <GlobalStyle />
    </div>
  );
}

