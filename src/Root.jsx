import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/index';
import { MainPage, ItemListPage } from './pages/index';

const Root = () => {
  return (
    <BrowserRouter>
      <Header></Header>

      <Route path="/" exact component={MainPage} />
      <Route path="/itemList" component={ItemListPage} />
    </BrowserRouter>
  );
};
export default Root;
