
export default {

    name: 'account',
    redirect: '/listAccounts',
    component: () => import(/* webpackChunkName: "Auth Layout" */ '../layouts/AccountLayout.vue'),
    children: [
       {
           path: '/listAccounts',
           name: 'listAccounts',
           component: () => import(/* webpackChunkName: "Login" */ '../views/listAccountsView.vue'),
       },
       {
        path: '/editAccount',
        name: 'editAccount',
        component: () => import(/* webpackChunkName: "Login" */ '../views/editAccountView.vue'),
    },
    {
        path: '/createAccount',
        name: 'createAccount',
        component: () => import(/* webpackChunkName: "Login" */ '../views/createAccountView.vue'),
    },

    ]

}