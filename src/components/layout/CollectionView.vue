<template>
    <main>
        <header>
            <h1>{{name}}</h1>
        </header>
        <section class="dinghy-class-card-container">
            <dinghy-class-card v-for="dinghyClass in dinghyClasses" :key="dinghyClass.system.codename" :data="dinghyClass"></dinghy-class-card>
        </section>
    </main>
</template>

<script>
import DinghyClassCard from '@/components/DinghyClassCard';

export default {
    name: 'collection-view',
    props: {
        name: String,
        dinghyClasses: Array
    },
    components: {
        DinghyClassCard
    }
};
</script>

<style lang="scss" scoped>
.dinghy-class-card-container {
    display: flex;
    margin-left: -10px;
}
</style>
