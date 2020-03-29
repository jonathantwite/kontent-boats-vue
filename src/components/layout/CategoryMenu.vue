<template>
    <nav class="classification-menu">
        <ul>
            <li class="list-title"><h3>{{$t('Navigation.ViewCategory')}}</h3></li>
            <li>
                <router-link :to="{name: 'Home', params: {lang: $route.params.lang}}">{{$t('Generic.Home')}}</router-link>
            </li>
            <li v-for="cat in allClassifications" :key="cat.id">
               <router-link :to="{name: 'Classification', params: {codename: cat.codename, lang: $route.params.lang}}">{{cat.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { Types } from '@/store/';

export default {
    computed: {
        allClassifications() { return this.$store.getters.GET_ALL_CLASSIFICATIONS; }
    },
    created() {
        this.$store.dispatch(Types.actions.LOAD_CLASSIFICATIONS);
    }
};
</script>

<style lang="scss" scoped>

</style>
