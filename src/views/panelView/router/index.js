
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
            path: '/accounts',
            name: 'account',
            component: () => import(/* webpackChunkName: "accounts" */ '../../accountView/views/accountView.vue'),
        },
       {
           path: '/purchases',
           name: 'purchase',
           component: () => import(/* webpackChunkName: "purchase" */ '../../purchaseView/views/purchasesView.vue'),
       },
    ]

}