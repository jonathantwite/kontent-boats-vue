<template>
    <aside class="builders-box">
        <header>
            <h3>Builders</h3>
        </header>
        <details v-for="builder in allBuilders" :key="builder.builder.system.codename">
            <summary>{{builder.builder.builder_name.value}} ({{builder.builder.location.value}})</summary>
            <ul>
                <li v-for="dinghyClass in builder.dinghyClasses" :key="dinghyClass.system.codename">
                    <router-link :to="{name: 'DinghyClass', params: {codename: dinghyClass.system.codename}}">{{dinghyClass.class_name.value}}</router-link>
                </li>
            </ul>
        </details>
    </aside>
</template>

<script>
import { Types } from '@/store';

const loadClasses = (store, builders) => builders.forEach(builder => { store.dispatch(Types.actions.LOAD_CLASSES_BY_BUILDER, builder.system.codename); });
export default {
    name: 'builders-box',
    props: ['builders'],
    computed: {
        allBuilders() {
            return this.builders.map(b => ({ builder: b, dinghyClasses: this.$store.getters.GET_CLASSES_BY_BUILDER(b.system.codename) }));
        }
    },
    mounted() {
        loadClasses(this.$store, this.builders);
    }

};
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts/_variables.scss';

.builders-box{
    background-color: $color-highlight-bg;
    float: right;
    margin-left: 15px;
}

header > h3 {
    background-color: $color-highlight-main;
    padding: $clickable-padding;
}

details {
    padding: $clickable-padding;
}

summary {
    cursor: pointer;
}
</style>
