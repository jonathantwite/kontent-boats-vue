<template>
    <div class="collection-view">
        <h2>{{name}}</h2>
        <section class="dinghy-class-card-container">
            <dinghy-class-card v-for="dinghyClass in dinghyClasses" :key="dinghyClass.system.codename" :data="dinghyClass"></dinghy-class-card>
        </section>
    </div>
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
