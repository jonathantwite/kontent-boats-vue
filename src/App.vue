<template>
    <div id="app">
        <div class="header-area">
            <transition name="fade-left">
                <portal-target name="page-header" :key="$route.fullPath"></portal-target>
            </transition>
        </div>

        <div class="layout">
            <div class="lh-menu">
                <category-menu></category-menu>
            </div>

            <div class="main">
                <transition name="fade">
                    <div class="content" :key="$route.fullPath">
                        <router-view />
                    </div>
                </transition>
            </div>

            <div class="language-selector">
                <label for="lang-selector">Select Language:&nbsp;</label>
                <select name="lang-selector" id="lang-selector" v-model="selectedLanguage">
                    <option v-for="lang in availableLanguages" :value="lang.codename" :key="lang.codename">{{lang.name}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint vue/no-unused-components: 0 */
import CategoryMenu from '@/components/layout/CategoryMenu';
import { Types } from '@/store';

import '@/scss/global.scss';

export default {
    name: 'App',
    computed: {
        selectedLanguage: {
            get() {
                return this.$store.getters[Types.getters.GET_SELECTED_LANGUAGE];
            },
            set(value) {
                this.$router.push({ name: this.$route.name, params: { lang: value } });
            }
        },
        availableLanguages: function() { return this.$store.getters[Types.getters.GET_AVAILABLE_LANGUAGES]; }
    },
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
@import '@/scss/abstracts/_variables.scss';

.header-area{
    white-space: nowrap;
    overflow-x: hidden;
    & > div {
        display: inline-block;
        width: 100%;
    }
}

.content {
    position: absolute;
}

.language-selector{
    position: absolute;
    right: $content-padding;
    padding-top: $content-padding;
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
