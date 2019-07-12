import React from 'react'
import { Layout } from 'antd';
import { connect } from 'dva';

// 引入路由
import { Switch } from 'dva/router';
import SubRouter,{RedirectRoute} from '../../utils/subRoutes'

import styles from './style/IndexPage.scss';
const { Content } = Layout;

// 内容
function content(props) {
    // console.log(props)
    const { routes,app } = props;
    // const isRight=routes.some(item=>item.path===props.location.pathname);
    // console.log(isRight)
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
                    </Switch>
                    {/* <span className={styles.divw}><span>----/----</span>Content</span> */}

                </Content>
            </div>
    )
}
export default connect()(content);
