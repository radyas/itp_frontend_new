import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '/', title: 'Home', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/employee/view', title: 'Employee', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            // {
            //     path: '/employee/add', title: 'Add Employee', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
            // {
            //     path: '/employee/all', title: 'View Employees', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // }
        ]
    },
    {
        path: '', title: 'Department', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            // {
            //     path: '/employee/add', title: 'Add Employee', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
            // {
            //     path: '/employee/all', title: 'View Employees', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // }
        ]
    },
    {
        path: '', title: 'Delivery', icon: 'icon-rocket', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            // {
            //     path: '/employee/add', title: 'Add Employee', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
            // {
            //     path: '/employee/all', title: 'View Employees', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // }
        ]
    },
    {
        path: '', title: 'ISO Documents', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            // {
            //     path: '/employee/add', title: 'Add Employee', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
            // {
            //     path: '/employee/all', title: 'View Employees', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // }
        ]
    },
];
