import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import './index.css'

import Navbar from './navbar'


class Principal extends React.Component{

  render(){
    return(
      <div>
        <App/>
      </div>
    )
  }
}

ReactDOM.render(<Principal/>, document.getElementById('root'));

