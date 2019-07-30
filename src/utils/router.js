export default [
    {
        path: '/',
        component: () => import('../pages/layout/Index'),
        model: [],
        routes: [
            {
                path: '/home',
                component: () => import('../pages/home/home'),
                model: [],
                meta:{
                    title:"首页"
                },
                redirect: true,
                isAuthority:true
            },
            {
                path: '/setup',
                component: () => import('../pages/setup/setup'),
                model: [],
                meta:{
                    title:"设置"
                },
                isAuthority:true
            },
            {
                path: '/other',
                component: () => import('../pages/other/other'),
                model: [],
                meta:{
                    title:"其他"
                },
                isAuthority:true
            },
            {   
                path:'/login',
                component: () => import('../pages/user/login.js'),
                model: [],
                meta:{
                    title:"登录"
                },
            }
        ]
    }
]