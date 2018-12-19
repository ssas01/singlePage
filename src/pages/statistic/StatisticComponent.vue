<template>
<div>
    <div class="statistic-top">
        <div chlass="static-top-text">
            <h1>数据统计</h1>
            <div>
                <span>今日访问人数:</span>
                <span>0</span>
            </div>
            <div>
                <span>星期三</span>
            </div>
            <div>
                <span>11:08:01</span>
            </div>
        </div>
    </div>
    <video id="videoElement"></video>
    <p>这个数据来自 vuex statistic module. --- {{ getStatisticTitle }}</p>    
    <p>通过 router-viegetTitlew 传递的属性 {{ categoryID }}</p>
    <button @click="clickHandler">数据统计</button>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import flvjs from 'flv'
    export default {
        props: ['categoryID'],
        computed: {
            ...mapGetters([
                'getStatisticTitle'
            ])
        },
        methods: {
            clickHandler(event) {
                console.log('数据统计页面按钮打印')
            }
        }
    }
</script>

<style>
    .statistic-top {
        
    }
</style>