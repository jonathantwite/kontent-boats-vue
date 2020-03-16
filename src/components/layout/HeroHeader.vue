<template>
    <header class="hero-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name: 'hero-header',
    props: ['imageUrl', 'title']
};
</script>

<style lang="scss" scoped>
.hero-image{
    height: 600px;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
}

h1{
    margin-left: 100px;
    color: #fff;
    font-size: 100px;
    text-shadow: 2px 2px 2px #444;
}
</style>
