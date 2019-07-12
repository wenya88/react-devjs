import React from 'react'
import { Layout } from 'antd';
import { connect } from 'dva';

// 引入路由
import { Switch } from 'dva/router';
import SubRouter,{RedirectRoute,NoMatchRoute} from '../../utils/subRoutes'

import styles from './style/IndexPage.scss';
const { Content } = Layout;

// 内容
function content(props) {
    const { routes,app } = props;
    return (
            <div>
                <Content className={styles['ant-lay-content']}>
                    <Switch>
                        {
                            routes.map((route,i) => (
                                <SubRouter key={i} {...route} app={app}/>
                            ))
                        }
                        {/* 重定向 */}
                        <RedirectRoute exact={true} from={'/'} routes={routes}/>
                        {/* 404错误页面 */}
                        <NoMatchRoute />
                    </Switch>
                 
                </Content>
            </div>
    )
}
export default connect()(content);
