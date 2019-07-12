import React, { Component } from 'react';
import styles from '../style/IndexPage.scss'
import {Layout,Button} from 'antd';
import { connect } from 'dva'

const { Header } = Layout;

// 头部菜单
 class topMenu extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    // 操作左侧是否展开
    handlerCollapsed=()=>{
       const { collapsed } = this.props;
        // dispatch 
        this.props.dispatch({
            type:'global/setCollapsed',
            payload:!collapsed
        });
       
    }
    render() {
        const { collapsed }=this.props;
        return (
            <div>
                <Header className={styles['ant-layout-header']}>
                     <Button type="default" icon={!collapsed?'menu-fold':'menu-unfold'} onClick={this.handlerCollapsed}/>
                </Header>
            </div>
        )
    }
}
export default connect(({global})=>({
    collapsed:global.collapsed
}))(topMenu)
