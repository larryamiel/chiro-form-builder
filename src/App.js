import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';

import BaseLayout from './layouts/BaseLayout';
import PageRoutes from './PageRoutes';

import '@fontsource/roboto/300.css';

createStore({
  fieldGroups: {}
}, {
  storageType: window.localStorage
});

function App() {
  return (
    <StateMachineProvider>
      <Router>
        <BaseLayout>
          <PageRoutes />
        </BaseLayout>
      </Router>
    </StateMachineProvider>
  );
}

export default App;