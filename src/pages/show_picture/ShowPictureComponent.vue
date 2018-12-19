<template>
    <div>
        <h1 class="font-test">图片展示</h1>
        <p>这个数据来自 vuex showPicture module. ---> {{ getShowPictureTitle }}</p>
        <button @click="clickHandler">图片展示</button>
        <p>通过 router-view 传递的属性 {{ categoryID }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                name: 'heheda',
                age: '111'
            }
        },
        props: ['categoryID'],
        computed: {
            ...mapGetters([
                'getShowPictureTitle'
            ])
        },
        methods: {
            clickHandler() {
                // 弹出图片展示对话框
            }
        }
    }
</script>

<style>
.font-test {
    color: red;
}
</style>
