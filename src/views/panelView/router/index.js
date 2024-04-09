
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
           path: '/purchase',
           name: 'purchase',
           component: () => import(/* webpackChunkName: "purchase" */ '../../purchaseView/views/purchasesView.vue'),
       },
    ]

}