<template>
    <header class="hero-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <img v-if="hasFloatingImage" :src="floatingImageUrl" class="floating-image" />
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name: 'hero-header',
    props: ['imageUrl', 'title', 'floatingImageUrl'],
    computed: {
        hasFloatingImage: function() { return !!this.floatingImageUrl; }
    }
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
.floating-image{
    position: absolute;
    top:0;
    right: 0;
    background-color: #fff;
    padding: 5px;;
    margin: 15px;
    width: 200px;
}
</style>
