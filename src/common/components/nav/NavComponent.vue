<template>
    <div class="nav-section">
        <nav>
            <ul>
                <li>
                    <router-link to="/statistic" class="link-normal">数据统计</router-link>  
                </li>
                <li>
                    <router-link to="/show-picture" class="link-normal">图片展示</router-link>
                </li>
                <li>
                    <router-link to="/user-info" class="link-normal">用户信息</router-link>
                </li>
                <li>
                    <router-link to="/else" class="link-normal">其他</router-link>
                </li>
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
            margin-left: 30px;
        }
        li{
            width: 100%;
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            a {
                margin-left: 10px; 
            }
        }
        
    }
</style>
