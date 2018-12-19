
import URL from './url'

const StatisticComponent = (resolve) => require(['pages/statistic/StatisticComponent.vue'], resolve)
const ShowPictureComponent = (resolve) => require(['pages/show_picture/ShowPictureComponent.vue'], resolve)
const UserInfoComponent = (resolve) => require(['pages/user_info/UserInfoComponent.vue'], resolve)
const PlaceHolderComponent = (resolve) => require(['pages/else/PlaceHolderComponent.vue'], resolve)


const WomenClothesComponent = (resolve) => require(['pages/else/secondPage/WomenClothesComponent.vue'], resolve)
const MenClothesComponent = (resolve) => require(['pages/else/secondPage/MenClothesComponent.vue'], resolve)
const ChildrenClothesComponent = (resolve) => require(['pages/else/secondPage/ChildrenClothesComponent.vue'], resolve)

const ChildrenPantsComponent = (resolve) => require(['pages/else/secondPage/ChildrenPantsComponent.vue'], resolve)
const ChildrenHatComponent = (resolve) => require(['pages/else/secondPage/ChildrenHatComponent.vue'], resolve)


export default [
    {
        path: '/',
        name: URL.ROOT,
        redirect: '/statistic'
    }, {
        path: '/statistic',
        name: URL.STATISTICS,
        component: StatisticComponent
    }, {
        path: '/show-picture',
        name: URL.SHOW_PICTURE,
        component: ShowPictureComponent
    }, {
        path: '/user-info',
        name: URL.USER_INFO,
        component: UserInfoComponent
    }, {
        path: '/else',
        name: URL.ELSE,
        component: PlaceHolderComponent,
        children: [
            // 配置第一个空路径，当匹配 /else 的时候 默认选中第一个子路由
            {
                path: '',
                redirect: 'women-clothes'
            },
            {
                path: 'women-clothes',
                component: WomenClothesComponent
            },
            {
                path: 'men-clothes',
                component: MenClothesComponent
            },
            {
                path: 'children-clothes',
                component: ChildrenClothesComponent,
                children: [
                    {
                        path: '',
                        redirect: 'pants'
                    },
                    {
                        path: 'pants',
                        component: ChildrenPantsComponent
                    },
                    {
                        path: 'hat',
                        component: ChildrenHatComponent
                    }
                ]
            }
        ]
    }
]
