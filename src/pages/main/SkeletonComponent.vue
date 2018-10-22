<template>
    <div class="container">
        <HeadComponent></HeadComponent>
        <div class="main-section">
            <NavComponent></NavComponent>
            <div class="main-left-section">
                <p>there will be main show section!</p>
                <!--过渡动画-->
                <transition name="page" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        
    </div>
</template>

<script>
    import NavComponent from 'common/components/nav/NavComponent.vue'
    import HeadComponent from 'common/components/head/HeadComponent.vue'
    export default {
        components: {
            NavComponent,
            HeadComponent
        }
    }
</script>

<style scope lang="scss">
    .container {
        width: 100%;
        height: 100%;
        .main-section {
            height: calc(100% - 67px); 
            .main-left-section {
                float: left;
                width: 80%;
                height: 100%;
                background-color: green;
            }
        }
    }   
</style>