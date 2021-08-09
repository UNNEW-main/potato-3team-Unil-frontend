import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from 'components/index';
import { MainPage, ProductListPage, ProductDetailPage } from 'pages/index';
import ScrollToTop from 'ScrollToTop';
const Root = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Route path="/" exact component={MainPage} />
        <Route path="/product/list" component={ProductListPage} />
        <Route path="/product/detail" component={ProductDetailPage} />
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default Root;
