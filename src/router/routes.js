
import URL from './url'

const StatisticComponent = (resolve) => require(['pages/statistic/StatisticComponent.vue'], resolve)
const ShowPictureComponent = (resolve) => require(['pages/show_picture/ShowPictureComponent.vue'], resolve)
const UserInfoComponent = (resolve) => require(['pages/user_info/UserInfoComponent.vue'], resolve)
const PlaceHolderComponent = (resolve) => require(['pages/else/PlaceHolderComponent.vue'], resolve)

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
        component: PlaceHolderComponent
    }
]
