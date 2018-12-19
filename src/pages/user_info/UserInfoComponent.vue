<template>
    <div>
        <h1>用户信息</h1>
        <p>这是一次尝试</p>
        <p>这是一次尝试</p>
        <p>看来尝试没有成功</p>
        <label>
            姓名：
            <input type="text" v-focus>
        </label>
        <br/>
        <br/>
        <button @click="clickHandler">用户信息</button>
    </div>
</template>

<script>
    export default {
        methods: {
            clickHandler() {
                // 弹出用户信息对话框
            }
        }
    }
</script>