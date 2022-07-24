import React from 'react';
import './App.css';
import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';

import {element} from 'prop-types';

function App(props) {
  return (
    <div className="App">
      <Header title="KG.react"/>
      <Content>
        {props.children}
      </Content>
      <Footer/>
    </div>
  );
}

App.propTypes = {
  children: element.isRequired,
}

export default App;
