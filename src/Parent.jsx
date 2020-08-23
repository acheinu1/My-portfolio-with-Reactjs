import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import RouterComp from './components/routerComp';

class Parent extends Component {
  render() {
    return (
      <div>
        <div className='demo-big-content'>
          <Layout>
            <Header title='Title' scroll>
              <Navigation>
                <a href='/'>Link</a>
                <a href='/'>Link</a>
                <a href='/'>Link</a>
                <a href='/'>Link</a>
              </Navigation>
            </Header>
            <Drawer title='Title'>
              <Navigation>
                <a href='/'>Link</a>
                <a href='/'>Link</a>
                <a href='/'>Link</a>
                <a href='/'>Link</a>
              </Navigation>
            </Drawer>
            <Content>
              <div className='page-content' />
              <RouterComp />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Parent;
