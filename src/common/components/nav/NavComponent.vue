<template>
    <div class="nav-section">
        <nav>
            <ul>
                <router-link tag="li" to="/statistic" class="link-normal">
                    <a class="link-normal">数据统计</a>
                </router-link>
                <router-link tag="li" to="/show-picture" class="link-normal">
                    <a class="link-normal">图片展示</a>
                </router-link>
                <router-link tag="li" to="/user-info" class="link-normal">
                    <a class="link-normal">用户信息</a>
                </router-link>
                <router-link tag="li" to="/else" class="link-normal">
                    <a class="link-normal">其他</a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">
    .nav-section {
        width: 20%;
        height: 100%;
        float: left;
        background-color: red;
        ul {
            margin-top: 30px;
        }
        li{
            width: 80%;
            height: 60px;
            padding-left: 20%;
            line-height: 60px;
            font-size: 18px;
            a {
                margin-left: 10px; 
            }
        }
        
    }
</style>
