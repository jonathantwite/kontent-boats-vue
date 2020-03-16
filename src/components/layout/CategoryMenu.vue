<template>
    <nav class="classification-menu">
        <ul>
            <li class="list-title"><h3>View Category</h3></li>
            <li v-for="cat in allClassifications" :key="cat.id">
               <router-link :to="{name: 'Classification', params: {codename: cat.codename}}">{{cat.name}}</router-link>
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
