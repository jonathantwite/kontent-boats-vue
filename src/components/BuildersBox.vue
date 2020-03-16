<template>
    <aside class="builders-box">
        <header>
            <h3>Builders</h3>
        </header>
        <details v-for="builder in builders" :key="builder.system.codename">
            <summary>{{builder.builder_name.value}} ({{builder.location.value}})</summary>
        </details>
    </aside>
</template>

<script>
export default {
    name: 'builders-box',
    props: ['builders']
};
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts/_variables.scss';

.builders-box{
    background-color: $color-highlight-bg;
    float: right;
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
