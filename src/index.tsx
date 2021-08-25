import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import './index.sass';
import Homepage from './pages/Homepage';

const { Header, Footer, Content } = Layout;

ReactDOM.render(
  <Layout className="container">
    <Header className="header">
      Broccoli & Co.
    </Header>
    <Content className="content">
      <Homepage />
    </Content>
    <Footer className="footer">
      <p className="text">
        Made with ♥ in Melbourne.
      </p>
      <p className="text">
        @ 2016 Broccoli & Co. All rights reserved.
      </p>
    </Footer>
  </Layout>,
  document.getElementById('root'),
);
