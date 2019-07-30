import React, { Component } from 'react'
import { Layout } from 'antd';
import { connect } from 'dva';

// 引入路由
import { Switch } from 'dva/router';
import SubRouter, { RedirectRoute, NoMatchRoute } from '../../utils/subRoutes'

// 引用布局组件
import Sider from './leftMenu/sider';
import Header from './topMenu/topMenu'
import styles from './style/IndexPage.scss';
const { Content } = Layout;

// 内容
class content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }
    componentDidMount() {
        const pathName = this.props.location.pathname;
        this.handlerEditTitle(pathName);
        // 隐藏布局
        if (!sessionStorage.userId || pathName === '/login') {
            this.handlerIsShow(false);
        }
    }
    // 当页面获取新的props时更新
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.handlerIsShow(nextProps.isShowMenu);
    }
    handlerIsShow(type) {
        this.setState({
            isShow: type
        });
    }
    // 修改标题
    handlerEditTitle(pathName) {
        let meta = this.props.routes.filter(item => item.path === pathName);
        document.title = `CCN_${meta.length>0?meta[0].meta.title:''}`
    }

    render() {
        const { routes, app } = this.props;
        const { isShow } = this.state;
        const siderMenu = isShow ? <Sider {...this.props} /> : null; //菜单
        const headerMenu = isShow ? <Header /> : null;//顶部菜单
        return (
            <Layout>
                {/* 左侧菜单 */}
                {siderMenu}
                <Layout>
                    {/* 头部菜单 */}
                    {headerMenu}
                    {/* 内容组件 */}
                    <Content className={styles["ant-lay-content"]}>
                        <Switch>
                            {
                                routes.map((route, i) => (
                                    <SubRouter key={i} {...route} app={app} />
                                ))
                            }
                            {/* 重定向 */}
                            <RedirectRoute exact={true} from={'/'} routes={routes} />

                            {/* 404错误页面 */}
                            <NoMatchRoute props={this.props} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default connect(({ global }) => ({
    isShowMenu: global.isShowMenu
}))(content);

