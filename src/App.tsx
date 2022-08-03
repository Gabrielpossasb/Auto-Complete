import React from 'react';
import { GlobalStyle } from '.';
import { Container } from './appSty';
import { SearchBar } from './components/Barra/SearchBar';
import Searchs from './db.json'

export function App() {
  return (
    <Container>
      <SearchBar data={Searchs} title={''} id={0}   />
      <GlobalStyle/>
    </Container>
  );
}

