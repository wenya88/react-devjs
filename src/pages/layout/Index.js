import React, { Component } from 'react'
import { connect } from 'dva';

import Sider from './leftMenu/sider';
import Header from './topMenu/topMenu'
import Content from './content';

import { Layout } from 'antd';

class Index extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <Layout>
          {/* 左侧菜单 */}
          <Sider {...this.props}/>
          <Layout>
            {/* 头部菜单 */}
            <Header />
            {/* 内容组件 */}
            <Content {...this.props} />
          </Layout>
      </Layout>
    )
  }
}
Index.propTypes = {
};

export default connect()(Index);
