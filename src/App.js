import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/ssilvajb/wrapped-btc'
});

const wbtcQuery = gql`
minters {
    id
    address
    totalMinted
    totalBurned
  }
`;

client.query({
  query: wbtcQuery
}).then(res => console.log(res));

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
