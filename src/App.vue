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
    name: 'App',
    metaInfo() {
        return {
            title: 'Dinghy Classes',
            titleTemplate: 'Dinghies | %s',
            meta: [
                { charset: 'utf-8' },
                { vmid: 'description', name: 'description', content: 'The various dinghy classes that you may come across sailing in the UK' },
                { vmid: 'og:site_name', name: 'og:site_name', content: 'Dinghy Classes' },
                { vmid: 'og:description', name: 'og:description', content: 'The various dinghy classes that you may come across sailing in the UK' },
                { vmid: 'og:type', name: 'og:type', content: 'website' },
                { vmid: 'og:url', name: 'og:url', content: process.env.VUE_APP_APP_URL + this.$route.path }
            ],
            link: [
                { vmid: 'canonical', rel: 'canonical', href: process.env.VUE_APP_APP_URL + this.$route.path }
            ]
        };
    },
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
