<template>
    <div class="head-section">
        <a href="javascript: void(0);" class="logo">
            一个网站
        </a>
        <CustomerTopComponent></CustomerTopComponent>
    </div>
</template>

<script>
    import CustomerTopComponent from 'common/components/head/CustomerTopComponent.vue'

    export default {
        data() {
            return {}
        },
        components: {
            CustomerTopComponent
        }
    }
</script>

<style scoped lang="scss">
    .head-section {
        height: 67px;
        background-color: pink;
        .logo {
            display: inline-block;
            width: 240px;
            height: 67px;
            text-indent: -999px;
            background: url('../../../images/2_one_site.png') no-repeat no-repeat;
        }
    }
</style>