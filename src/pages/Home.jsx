import React, { Component } from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Main from '../components/Main';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Aside />
        <Main />
        <footer />
      </>
    );
  }
}

export default Home;
