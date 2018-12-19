<template>
    <div class="third-container">
        <ul class="third-nav">
            <router-link tag="li" to="/else/children-clothes/pants">
                <a>连体裤</a>
            </router-link>
            <router-link tag="li" to="/else/children-clothes/hat">
                <a>帽子</a>
            </router-link>
        </ul>
        <div class="third-show-section">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .third-container {
        height: 200px;
        .third-nav {
            float: left;
            width: 20%;
            height: 100%;
            background-color: orange;
        }
        .third-show-section {
            float: left;
            height: 100%;
            width: 80%;
            background-color: purple;
        }
    }
</style>