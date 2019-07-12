export default [
    {
        path:'/',
        component:()=>import('../pages/layout/Index'),
        model:[],
        routes:[
            {
                path:'/home',
                component:()=>import('../pages/home/home'),
                model:[],
                redirect:true
            },
            {
                path:'/setup',
                component:()=>import('../pages/setup/setup'),
                model:[]
            },
            {
                path:'/other',
                component:()=>import('../pages/other/other'),
                model:[]
            }
        ]

    }
]