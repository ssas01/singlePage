<template>
    <div>
        <h1>其他</h1>
        <p>嵌套路由实验基地</p>
        <div class="second-container clearfix">
            <ul class="second-nav">
                <router-link tag="li" to="/else/women-clothes">
                    <a>女装</a>
                </router-link>
                <router-link tag="li" to="/else/men-clothes">
                    <a>男装</a>
                </router-link>
                <router-link tag="li" to="/else/children-clothes">
                    <a>童装</a>
                </router-link>
            </ul>
            <div class="second-show-section">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .second-container {
        height: 200px;
        .second-nav {
            float: left;
            width: 20%;
            height: 100%;
            background-color: pink;
        }
        .second-show-section {
            float: left;
            height: 100%;
            width: 80%;
            background-color: red;
        }
    }
</style>