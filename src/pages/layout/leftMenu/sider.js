import React, { Component } from 'react';
import { Layout,Menu, Icon } from 'antd';
import styles from '../style/IndexPage.scss'
import { connect } from 'dva';
import { Link } from 'dva/router'

const { Sider } = Layout;
// const { SubMenu } = Menu;

// 左侧主菜单
class sider extends Component {
    constructor(props){
        super(props);
        this.state={
            menu:[
                {name:"首页",icon:"desktop",id:"home",path:"/home"},
                {name:"设置",icon:"appstore",id:"setup",path:"/setup"},
                {name:"其他",icon:"pie-chart",id:"other",path:"/other"}
            ],
            defalutkey:[] //默认菜单KEY
        }
    }
    componentDidMount(){
       this.handlerDefault(this.props.location.pathname)
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        this.handlerDefault(nextProps.location.pathname);
    }
    // 处理默认菜单
    handlerDefault(item){
        const path=item.split('/')
        const key=path&&path.length<2?'home':path[1];
        this.setState({
            defalutkey:[key]
        })
    }
    render() {
        const { menu,defalutkey } = this.state;
        const { collapsed } =this.props;
        return (
            <div>
                <Sider className={styles['ant-layout-sider']} style={{'height':window.innerHeight+'px'}} collapsed={collapsed}>
                    <div className={styles.logo}>
                        <Icon type="loading" style={{marginRight:'10px'}}/>
                        <span>
                           {!collapsed?'REACT_V1.0':''} 
                        </span>
                    </div>
                    <Menu
                    defaultSelectedKeys={['home']}
                    selectedKeys={defalutkey}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    className={styles['ant-menu-dark']}
                    style={{'margin':'0px'}}
                    >
                        {
                            menu.map(({name,icon,id,path})=>(
                                <Menu.Item key={id}>
                                   <Link to={path} replace>
                                        <Icon type={icon} />
                                            <span>{name}</span>
                                   </Link> 
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Sider>
            </div>
        )
    }
};
export default connect(({global})=>({
    collapsed:global.collapsed
}))(sider)