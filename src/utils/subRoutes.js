import React from 'react'
import { Route,Redirect } from 'dva/router';
import { connect } from 'dva';
import dynamic from 'dva/dynamic';
import NoMatch from '../components/noMatch'


// 动态加载组件
const dynamicCom=(app,models,component,routes)=>dynamic({
    app,
    model:()=> models,
    component:()=>
        component().then(res=>{
            // console.log(window.location.hash.slice(1))
            const Component=res.default || res;
            return props => <Component {...props} app={app} routes={routes} />
        })

})

function subRoutes({routes,component,app,model}) {
    return (
        <Route component={dynamicCom(
            app,
            model,
            component,
            routes
        )}
        />
    )
};

// 封装路由重定向
export function RedirectRoute({routes,from,exact}){
    return <Redirect exact={exact} to={routes[0].path} from={from} />
}

// 404报错页面
export function NoMatchRoute({status=404}){
    return <Route render={props=><NoMatch {...props} status={status}/>} />
}


export default connect()(subRoutes)
