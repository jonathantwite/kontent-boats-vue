<template>
    <main>
        <header>
            <h1>{{name}}</h1>
        </header>
        <section class="dinghy-class-card-container">
            <dinghy-class v-for="dinghyClass in dinghyClasses" :key="dinghyClass.system.id" :data="dinghyClass"></dinghy-class>
        </section>
    </main>
</template>

<script>
import DinghyClass from '@/components/DinghyClass';

export default {
    name: 'collection-view',
    props: {
        name: String,
        dinghyClasses: Array
    },
    components: {
        DinghyClass
    }
};
</script>

<style lang="scss" scoped>
.dinghy-class-card-container {
    display: flex;
    margin-left: -10px;
}
</style>
