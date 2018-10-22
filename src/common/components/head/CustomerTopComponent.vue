<template>
    <div class="head-customer">
        <!-- 两个状态: 未登陆-->
        <div v-if="true" class="customer-land">
            <img src='../../../images/cat.jpg'/>
            <span>姓名</span>
            <router-link to='/login'>退出登陆</router-link><!--哪里也不去，改变状态为 未登陆-->
        </div>
        <!-- 两个状态: 登陆-->
        <div v-else class="customer-no-land">
            <router-link to="/register">注册</router-link>
            <span>|</span>
            <router-link to="/login">登陆</router-link>            
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.head-customer {
    height: 67px;
    line-height: 67px;
    float: right;
    margin-right: 50px;

    .customer-land {
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            vertical-align: middle;            
        }
        span, a {
            margin: 0 5px;
            vertical-align: middle;
        }
    }

    .customer-no-land {
        span, a {
            margin: 0 5px;
        }
    }
}
</style>
