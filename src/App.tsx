import React from 'react';
import Router from './routes';
import './assets/scss/styled.scss';
import { ProviderData } from './context';

function App() {
  return (
    <ProviderData>
      <Router/>
    </ProviderData>
  );
}

export default App;
