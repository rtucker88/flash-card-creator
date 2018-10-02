import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient();

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
