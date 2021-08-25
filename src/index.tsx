import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import Homepage from './pages/Homepage';

ReactDOM.render(
  <div className="container">
    <div className="header">
      Broccoli & Co.
    </div>
    <div className="content">
      <Homepage />
    </div>
    <div className="footer">
      <p className="text">
        Made with ♥ in Melbourne.
      </p>
      <p className="text">
        @ 2016 Broccoli & Co. All rights reserved.
      </p>
    </div>
  </div>,
  document.getElementById('root'),
);
