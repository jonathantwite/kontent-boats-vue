<template>
    <header class="hero-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <img v-if="hasFloatingImage" :src="floatingImageUrl" class="floating-image" :alt="floatingImage.description" />
        <h1>{{title}}</h1>
    </header>
</template>

<script>
import { getImageUrl, getFullWidthImageUrl } from '@/Utilities/kentico';

export default {
    name: 'hero-header',
    props: ['title', 'floatingImage', 'image'],
    computed: {
        imageUrl: function() {
            if (this.image) {
                return getFullWidthImageUrl(this.image.url);
            }
            return null;
        },
        floatingImageUrl: function() {
            if (this.floatingImage) {
                return getImageUrl(this.floatingImage.url, 200);
            }
            return null;
        },
        hasFloatingImage: function() { return !!this.floatingImageUrl; }
    }
};
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts/_variables.scss';

.hero-image{
    height: 600px;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-flex;
    align-items: center;
    background-color: $color-highlight-bg;
    width: 100%;
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
    margin: $content-padding;
    width: 200px;
}
</style>
