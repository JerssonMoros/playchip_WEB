import accountRouter from '../../accountView/router'

export default {

    name: 'panel',
    redirect: '/profile',
    component: () => import(/* webpackChunkName: "panel" */ '../../panelView/views/panelView.vue'),
    children: [
       {
           path: '/profile',
           name: 'profile',
           component: () => import(/* webpackChunkName: "profile" */ '../../profileView/views/profileView.vue'),
       },
       {
            path: '/account',
            ...accountRouter
        },
       {
           path: '/purchases',
           name: 'purchase',
           component: () => import(/* webpackChunkName: "purchase" */ '../../purchaseView/views/purchasesView.vue'),
       },
    ]

}