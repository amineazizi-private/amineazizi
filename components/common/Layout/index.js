import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default class Layout extends Component {
   render() {
      const { children } = this.props;

      return (
         <>
            <Header />
            { children }
            <Footer />
         </>
      );
   }
}