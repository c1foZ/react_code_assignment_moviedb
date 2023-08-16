import React from 'react';
import './Bar.css';
import logo from './moviedb.svg'

function Bar() {
  return (
    <div className="top-bar">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default Bar;