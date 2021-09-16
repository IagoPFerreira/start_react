import React, { Component } from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Aside />
        <main>
          <article />
          <article />
          <article />
        </main>
        <footer />
      </>
    );
  }
}

export default Home;
