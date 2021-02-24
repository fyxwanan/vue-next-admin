import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { store } from "/@/store/index.ts"
import { getSession, clearSession } from "/@/utils/storage.ts"
import { getMenuAdmin, getMenuTest } from '/@/api/menu/index.ts'

// 定义动态路由
export const dynamicRoutes = [
    {
        path: '/',
        name: '/',
        component: () => import('/@/views/layout/index.vue'),
        redirect: '/home',
        meta: {
            isKeepAlive: true
        },
        children: [{
            path: '/home',
            name: 'home',
            component: () => import('/@/views/home/index.vue'),
            meta: {
                title: '首页',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye'
            }
        },
        {
            path: '/system',
            name: 'system',
            component: () => import('/@/views/layout/routerView/parent.vue'),
            redirect: '/system/menu',
            meta: {
                title: '系统设置',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: false,
                isIframe: false,
                auth: ['admin'],
                icon: 'iconfont icon-xitongshezhi'
            },
            children: [
                {
                    path: '/system/menu',
                    name: "systemMenu",
                    component: () => import('/@/views/system/menu/index.vue'),
                    meta: {
                        title: '菜单管理',
                        isLink: '',
                        isHide: false,
                        isKeepAlive: true,
                        isAffix: false,
                        isIframe: false,
                        auth: ['admin'],
                        icon: 'iconfont icon-caidan'
                    }
                },
                {
                    path: '/system/user',
                    name: "systemUser",
                    component: () => import('/@/views/system/user/index.vue'),
                    meta: {
                        title: '用户管理',
                        isLink: '',
                        isHide: false,
                        isKeepAlive: true,
                        isAffix: false,
                        isIframe: false,
                        auth: ['admin'],
                        icon: 'iconfont icon-icon-',
                    }
                }
            ]
        },
        {
            path: '/limits',
            name: 'limits',
            component: () => import('/@/views/layout/routerView/parent.vue'),
            redirect: '/limits/frontEnd',
            meta: {
                title: '权限管理',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: false,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-quanxian'
            },
            children: [
                {
                    path: '/limits/frontEnd',
                    name: 'limitsFrontEnd',
                    component: () => import('/@/views/layout/routerView/parent.vue'),
                    redirect: '/limits/frontEnd/page',
                    meta: {
                        title: '前端控制',
                        isLink: '',
                        isHide: false,
                        isKeepAlive: true,
                        isAffix: false,
                        isIframe: false,
                        auth: ['admin', 'test']
                    },
                    children: [
                        {
                            path: '/limits/frontEnd/page',
                            name: 'limitsFrontEndPage',
                            component: () => import('/@/views/limits/frontEnd/page/index.vue'),
                            meta: {
                                title: '页面权限',
                                isLink: '',
                                isHide: false,
                                isKeepAlive: true,
                                isAffix: false,
                                isIframe: false,
                                auth: ['admin', 'test']
                            }
                        },
                        {
                            path: '/limits/frontEnd/btn',
                            name: 'limitsFrontEndBtn',
                            component: () => import('/@/views/limits/frontEnd/btn/index.vue'),
                            meta: {
                                title: '按钮权限',
                                isLink: '',
                                isHide: false,
                                isKeepAlive: true,
                                isAffix: false,
                                isIframe: false,
                                auth: ['admin', 'test']
                            }
                        }
                    ]
                },
                {
                    path: '/limits/backEnd',
                    name: 'limitsBackEnd',
                    component: () => import('/@/views/layout/routerView/parent.vue'),
                    meta: {
                        title: '后端控制',
                        isLink: '',
                        isHide: false,
                        isKeepAlive: true,
                        isAffix: false,
                        isIframe: false,
                        auth: ['admin', 'test']
                    },
                    children: [
                        {
                            path: '/limits/backEnd/page',
                            name: 'limitsBackEndEndPage',
                            component: () => import('/@/views/limits/backEnd/page/index.vue'),
                            meta: {
                                title: '页面权限',
                                isLink: '',
                                isHide: false,
                                isKeepAlive: true,
                                isAffix: false,
                                isIframe: false,
                                auth: ['admin', 'test']
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/menu',
            name: 'menu',
            component: () => import('/@/views/layout/routerView/parent.vue'),
            redirect: '/menu/menu1',
            meta: {
                title: '菜单嵌套',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: false,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-caidan'
            },
            children: [
                {
                    path: '/menu/menu1',
                    name: 'menu1',
                    component: () => import('/@/views/layout/routerView/parent.vue'),
                    redirect: '/menu/menu1/menu11',
                    meta: {
                        title: '菜单1',
                        isLink: '',
                        isHide: false,
                        isKeepAlive: true,
                        isAffix: false,
                        isIframe: false,
                        auth: ['admin', 'test'],
                        icon: 'iconfont icon-caidan'
                    },
                    children: [
                        {
                            path: '/menu/menu1/menu11',
                            name: 'menu11',
                            component: () => import('/@/views/menu/menu1/menu11/index.vue'),
                            meta: {
                                title: '菜单11',
                                isLink: '',
                                isHide: false,
                                isKeepAlive: true,
                                isAffix: false,
                                isIframe: false,
                                auth: ['admin', 'test'],
                                icon: 'iconfont icon-caidan'
                            }
                        },
                        {
                            path: '/menu/menu1/menu12',
                            name: 'menu12',
                            component: () => import('/@/views/layout/routerView/parent.vue'),
                            redirect: '/menu/menu1/menu12/menu121',
                            meta: {
                                title: '菜单12',
                                isLink: '',
                                isHide: false,
                                isKeepAlive: true,
                                isAffix: false,
                                isIframe: false,
                                auth: ['admin', 'test'],
                                icon: 'iconfont icon-caidan'
                            },
                            children: [
                                {
                                    path: '/menu/menu1/menu12/menu121',
                                    name: 'menu121',
                                    component: () => import('/@/views/menu/menu1/menu12/menu121/index.vue'),
                                    meta: {
                                        title: '菜单121',
                                        isLink: '',
                                        isHide: false,
                                        isKeepAlive: true,
                                        isAffix: false,
                                        isIframe: false,
                                        auth: ['admin', 'test'],
                                        icon: 'iconfont icon-caidan'
                                    }
                                },
                                {
                                    path: '/menu/menu1/menu12/menu122',
                                    name: 'menu122',
                                    component: () => import('/@/views/menu/menu1/menu12/menu122/index.vue'),
                                    meta: {
                                        title: '菜单122',
                                        isLink: '',
                                        isHide: false,
                                        isKeepAlive: true,
                                        isAffix: false,
                                        isIframe: false,
                                        auth: ['admin', 'test'],
                                        icon: 'iconfont icon-caidan'
                                    }
                                }
                            ]
                        },
                        {
                            path: '/menu/menu1/menu13',
                            name: 'menu13',
                            component: () => import('/@/views/menu/menu1/menu13/index.vue'),
                            meta: {
                                title: '菜单13',
                                isLink: '',
                                isHide: false,
                                isKeepAlive: true,
                                isAffix: false,
                                isIframe: false,
                                auth: ['admin', 'test'],
                                icon: 'iconfont icon-caidan'
                            }
                        }
                    ]
                },
                {
                    path: '/menu/menu2',
                    name: 'menu2',
                    component: () => import('/@/views/menu/menu2/index.vue'),
                    meta: {
                        title: '菜单2',
                        isLink: '',
                        isHide: false,
                        isKeepAlive: true,
                        isAffix: false,
                        isIframe: false,
                        auth: ['admin', 'test'],
                        icon: 'iconfont icon-caidan'
                    }
                }
            ]
        },
        {
            path: '/fun',
            name: 'funIndex',
            component: () => import('/@/views/layout/routerView/parent.vue'),
            redirect: '/fun/tagsView',
            meta: {
                title: '功能',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: false,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-crew_feature'
            },
            children: [
                {
                    path: '/fun/tagsView',
                    name: 'funTagsView',
                    component: () => import('/@/views/fun/tagsView/index.vue'),
                    meta: {
                        title: 'tagsView 操作',
                        isLink: '',
                        isHide: false,
                        isKeepAlive: true,
                        isAffix: false,
                        isIframe: false,
                        auth: ['admin', 'test'],
                        icon: 'el-icon-thumb'
                    }
                }
            ]
        },
        {
            path: '/pages',
            name: 'pagesIndex',
            component: () => import('/@/views/pages/index.vue'),
            meta: {
                title: '页面',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: false,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-fuzhiyemian'
            }
        },
        {
            path: '/chart',
            name: 'chartIndex',
            component: () => import('/@/views/chart/index.vue'),
            meta: {
                title: '大数据图表',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: false,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-ico_shuju'
            }
        },
        {
            path: '/personal',
            name: 'personal',
            component: () => import('/@/views/personal/index.vue'),
            meta: {
                title: '个人中心',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: false,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-gerenzhongxin'
            }
        },
        {
            path: '/tools',
            name: 'tools',
            component: () => import('/@/views/tools/index.vue'),
            meta: {
                title: '工具类集合',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: false,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-gongju'
            }
        },
        {
            path: '/link',
            name: 'layoutLinkView',
            component: () => import('/@/views/layout/routerView/parent.vue'),
            meta: {
                title: '外链',
                isLink: 'https://element-plus.gitee.io/#/zh-CN/component/installation',
                isHide: false,
                isKeepAlive: false,
                isAffix: false,
                isIframe: false,
                auth: ['admin'],
                icon: 'iconfont icon-caozuo-wailian'
            }
        },
        {
            path: '/iframes',
            name: 'layoutIfameView',
            component: () => import('/@/views/layout/routerView/parent.vue'),
            meta: {
                title: '内嵌 iframe',
                isLink: 'https://gitee.com/lyt-top/vue-admin-wonderful',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: true,
                auth: ['admin'],
                icon: 'iconfont icon-neiqianshujuchucun'
            }
        }]
    }
]

// 定义静态路由
const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('/@/views/login/index.vue'),
        meta: {
            title: '登陆'
        }
    },
    {
        path: '/404',
        name: '404',
        component: () => import('/@/views/error/404.vue'),
        meta: {
            title: '找不到此页面'
        }
    },
    {
        path: '/401',
        name: '401',
        component: () => import('/@/views/error/401.vue'),
        meta: {
            title: '没有权限'
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'pathMatch',
        redirect: '/404',
        meta: {
            title: '页面找不到重定向'
        }
    }
]

// 添加静态路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRoutes
})

// 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
// console.log(store)
// console.log(dynamicRoutes)
// store.dispatch('setBackEndControlRoutes', 'admin')
export function getBackEndControlRoutes() {
    getMenuTest().then((res: any) => {
        console.log(JSON.parse(JSON.stringify(res)));
        // console.log(backEndRouter(res.data))
        dynamicRoutes[0].children = backEndRouter(res.data)
        dynamicRoutes[0].children = res.data
        console.log(dynamicRoutes)
        // initAllFun()
        store.dispatch('setUserInfos')
        setAddRoute() // 添加动态路由
        setFilterMenu() // 过滤权限菜单
        setCacheTagsViewRoutes() // 添加 keepAlive 缓存
        // console.log(router.getRoutes())
    });
}

// export function loadView(path: string) {
//     return () => import(`../views/${path}.vue`)
// }

// 后端控制路由，递归处理每一项 `component` 中的路径
// export function backEndRouter(routes: any) {
//     if (!routes) return false
//     return routes.map((v: any) => {
//         if (v.component) v.component = () => import(`../views${v.component}.vue`)
//         if (v.children) v.children = backEndRouter(v.children)
//         return v
//     })
// }

const dynamicViewsModules = import.meta.glob('../views/**/*.{vue,tsx}');

console.log(dynamicViewsModules)


export function backEndRouter(routes: any) {
    if (!routes) return;
    return routes.forEach((item: any) => {
        const { component } = item;
        const { children } = item;
        if (component) item.component = dynamicImport(dynamicViewsModules, component as string);
        children && backEndRouter(children);
        return item
    });
}

export function dynamicImport(
    dynamicViewsModules: Record<string, () => Promise<{ [key: string]: any; }>>,
    component: string
) {
    const keys = Object.keys(dynamicViewsModules);
    const matchKeys = keys.filter((key) => {
        const k = key.replace('../views', '');
        return k.startsWith(`${component}`) || k.startsWith(`/${component}`);
    });
    console.log(matchKeys)
    if (matchKeys?.length === 1) {
        const matchKey = matchKeys[0];
        return dynamicViewsModules[matchKey];
    }
    if (matchKeys?.length > 1) {
        console.warn('Please do not create');
        return false;
    }
}

// 多级嵌套数组处理成一维数组
export function formatFlatteningRoutes(arr: any) {
    if (arr.length < 0) return false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].children) {
            arr = arr.slice(0, i + 1).concat(arr[i].children, arr.slice(i + 1))
        }
    }
    return arr
}

// 多级嵌套数组处理后的一维数组，再处理成 `定义动态路由` 的格式
// 只保留二级：也就是二级以上全部处理成只有二级，keep-alive 支持二级缓存
// isKeepAlive 处理 `name` 值，进行缓存。顶级关闭，全部不缓存
export function formatTwoStageRoutes(arr: any) {
    if (arr.length < 0) return false
    const newArr: any = []
    const cacheList: Array<string> = []
    arr.map((v: any) => {
        if (v.path === '/') {
            newArr.push({ component: v.component, name: v.name, path: v.path, redirect: v.redirect, meta: v.meta, children: [] })
        } else {
            newArr[0].children.push({ ...v })
            if (newArr[0].meta.isKeepAlive && v.meta.isKeepAlive) {
                cacheList.push(v.name)
                store.dispatch('setCacheKeepAlive', cacheList)
            }
        }
    })
    return newArr
}

// 缓存多级嵌套数组处理后的一维数组(tagsView、菜单搜索中使用：未过滤隐藏的(isHide))
export function setCacheTagsViewRoutes() {
    // 先处理有权限的路由，否则 tagsView、菜单搜索中无权限的路由也将显示
    let authsRoutes = setFilterMenuFun(dynamicRoutes, store.state.userInfos.authPageList)
    // 添加到 vuex setTagsViewRoutes 中
    store.dispatch('setTagsViewRoutes', formatTwoStageRoutes(formatFlatteningRoutes(authsRoutes))[0].children)
}

// 获取当前用户的权限去比对路由表，用于左侧菜单/横向菜单的显示
export function setFilterMenu() {
    store.dispatch("setRoutes", setFilterMenuFun(dynamicRoutes[0].children, store.state.userInfos.authPageList))
}

// 判断路由 auth 中是否包含当前登录用户权限字段
export function hasAuth(auths: any, route: any) {
    if (route.meta && route.meta.auth) return auths.some((auth: any) => route.meta.auth.includes(auth))
    else return true
}

// 递归过滤有权限的路由
export function setFilterMenuFun(routes: any, auth: any) {
    const menu: any = []
    routes.map((route: any) => {
        const item = { ...route }
        if (hasAuth(auth, item)) {
            if (item.children) item.children = setFilterMenuFun(item.children, auth)
            menu.push(item)
        }
    })
    return menu
}

// 获取当前用户的权限去比对路由表，用于动态路由的添加
export function setFilterRoute() {
    let filterRoute: any = []
    formatTwoStageRoutes(formatFlatteningRoutes(dynamicRoutes))[0].children.map((route: any) => {
        route.meta.auth.map((metaAuth: any) => {
            store.state.userInfos.authPageList.map((auth: any) => {
                if (metaAuth === auth) filterRoute.push({ ...route })
            })
        })
    })
    return filterRoute
}

// 比对后的路由表，进行重新赋值
export function setFilterRouteEnd() {
    let filterRouteEnd: any = formatTwoStageRoutes(formatFlatteningRoutes(dynamicRoutes))
    filterRouteEnd[0].children = setFilterRoute()
    return filterRouteEnd
}

// 添加动态路由
export function setAddRoute() {
    setFilterRouteEnd().map((route: any) => {
        router.addRoute(route as RouteRecordRaw)
    })
}

// 删除/重置路由
export function resetRoute() {
    setFilterRouteEnd().map((route: any) => {
        const { name } = route
        router.hasRoute(name) && router.removeRoute(name)
    })
}

// 初始化方法，防止刷新时丢失 
export function initAllFun() {
    const token = getSession('token')
    if (!token) return false
    setTimeout(() => {
        store.dispatch('setUserInfos')
        setAddRoute() // 添加动态路由
        setFilterMenu() // 过滤权限菜单
        setCacheTagsViewRoutes() // 添加 keepAlive 缓存
    }, 1000)
}

// 初始化方法执行
if (!store.state.themeConfig.isRequestRoutes) initAllFun()
// 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
if (store.state.themeConfig.isRequestRoutes) getBackEndControlRoutes()

// 路由加载前
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - vue-admin-wonderful-next` || 'vue-admin-wonderful-next'
    NProgress.configure({ showSpinner: false })
    NProgress.start()
    const token = getSession('token')
    if (to.path === '/login' && !token) {
        next()
        NProgress.done()
    } else {
        if (!token) {
            next('/login')
            clearSession()
            resetRoute()
            NProgress.done()
        } else if (token && to.path === '/login') {
            next('/home')
            NProgress.done()
        } else {
            next();
        }
    }
})

// 路由加载后
router.afterEach(() => {
    NProgress.done()
})

// 导出路由
export default router