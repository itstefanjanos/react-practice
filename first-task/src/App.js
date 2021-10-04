import './App.css';
import React from 'react';
import Welcome from './Welcome';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (React.createElement(
    'div',
    {className: 'App'},
    (<>
      <Header />
      <Welcome name='bob'/>
      <Footer />
    </>)
  ));
}

export default App;
