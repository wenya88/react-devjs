import React, { Component } from 'react'
import { connect } from 'dva'

class noMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'global/setIsShowMenu',
      payload: false
    });
  }
  render() {
    return (
      <div>
        该页面不存在,请重新输入
      </div>
    )
  }
}
export default connect()(noMatch);