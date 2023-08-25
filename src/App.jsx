import React from 'react';
import './App.css';

import { Brand, CTA, Navbar } from './components';
import { Footer, Header, Blog, Features, Possibillity, WhatGPT3 } from './containers';

export const App = () => {
  return (
    <div className='App'>
      <header className='gradient__bg'>
        <Navbar />
        <Header />
      </header>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibillity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}
