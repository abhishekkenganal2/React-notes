import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header.js'
import Auth from './components/Auth.js'

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
