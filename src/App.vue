<template>
    <div id="app">
        <portal-target name="page-header">
        </portal-target>
        <div class="layout">
            <div class="lh-menu">
                <category-menu></category-menu>
            </div>

            <div class="main">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryMenu from '@/components/layout/CategoryMenu';

import '@/scss/global.scss';

export default {
    components: {
        CategoryMenu
    }
};
</script>

<style lang="scss" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.layout {
    display: grid;
    grid-template-columns: [lh-menu] 200px [main] auto [rh-container] 200px;
}

.lh-menu {
    grid-area: lh-menu;
}

.main {
    grid-area: main;
}

</style>
