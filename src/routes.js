import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Table2 from './views/nav1/Table2.vue'
import Form from './views/nav1/Form.vue'
import productOutput from './views/nav1/ProductOutput.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true,
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '信息管理',
        redirect: 'main',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: false},
            { path: '/employeeManage', component: Table, name: '员工信息管理' },
            { path: '/orderingManage', component: Table2, name: '采购信息管理' },
            { path: '/financialManage', component: Form, name: '财务信息管理' },
            { path: '/outputManage', component: productOutput, name: '出库信息' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '上传表格',
        iconCls: 'fa fa-id-card-o',
        children: [
            // { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '上传excel表格' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/message', component: Page6, name: '我的消息' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '销售量',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: '数据可视化' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;