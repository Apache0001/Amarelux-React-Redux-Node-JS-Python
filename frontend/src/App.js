import React from'react';
import {Provider} from 'react-redux';
import store from './store'
import Routes from './routes';
import { Footer } from './components/footer';
import { Menu } from './components/menu';

export default function App() {
  return(
    <div>
      <Provider store={store}>
        <Menu />
        <Routes />
        <Footer />
      </Provider>
    </div>
  )
};
