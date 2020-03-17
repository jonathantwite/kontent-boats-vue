<template>
    <header class="hero-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <img v-if="hasFloatingImage" :src="floatingImageUrl" class="floating-image" />
        <h1>{{title}}</h1>
    </header>
</template>

<script>
import { ImageUrlBuilder, ImageCompressionEnum } from '@kentico/kontent-delivery';

export default {
    name: 'hero-header',
    props: ['title', 'floatingImage', 'image'],
    computed: {
        imageUrl: function() {
            if (this.image) {
                const imageUrlBuilder = new ImageUrlBuilder(this.image.url)
                    .withDpr(2)
                    .withCompression(ImageCompressionEnum.Lossless)
                    .withQuality(80)
                    // .withHeight(150)
                    .withWidth(1920);

                // get url to image with query parameters
                return imageUrlBuilder.getUrl();
            }
            return null;
        },
        floatingImageUrl: function() {
            if (this.floatingImage) {
                const imageUrlBuilder = new ImageUrlBuilder(this.floatingImage.url)
                    .withDpr(2)
                    .withCompression(ImageCompressionEnum.Lossless)
                    .withQuality(80)
                    // .withHeight(150)
                    .withWidth(200);

                // get url to image with query parameters
                return imageUrlBuilder.getUrl();
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
    display: flex;
    align-items: center;
    background-color: $color-highlight-bg;
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
