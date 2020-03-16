<template>
    <aside class="builders-box">
        <h3>Builders</h3>
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
summary {
    cursor: pointer;
}
</style>
