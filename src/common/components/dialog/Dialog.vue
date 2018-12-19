<template>
    <div class="dialog">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>      
        </div>
        <div class="footer">
            <slot name="footer" v-if="type == 0"></slot>
            <div class="one-btn" v-else-if="type == 1">
                <button>确定</button>
            </div>
            <div class="two-btns" v-else="type == 2">
                <button>确定</button>
                <button>取消</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['type']
    }
</script>

<style scope lang="scss">
    .dialog {
        width: 400px;
        height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .title {
            width: 100%;
            height: 50px;
            background-color: #FFFF00;
        }
        .content {
            width: 100%;
            height: 200px;       
            background-color: #FF00FF;
        }
        .footer {
            width: 100%;
            height: 50px;  
            background-color: #C0C0C0;            
        }
    }
</style>