<template>
    <main>
        <header class="hero-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
            <h1>{{data?data.class_name.value:''}}</h1>
        </header>
    </main>
</template>

<script>
import { ImageUrlBuilder, ImageCompressionEnum } from '@kentico/kontent-delivery';
import { Types } from '@/store';
export default {
    computed: {
        data() { return this.$store.getters.GET_CLASS(this.$route.params.classCodename); },
        imageUrl: function() {
            if (this.data) {
                const imageUrlBuilder = new ImageUrlBuilder(this.data.image.value[0].url)
                    .withDpr(2)
                    .withCompression(ImageCompressionEnum.Lossless)
                    .withQuality(80)
                    // .withHeight(150)
                    .withWidth(1920);

                // get url to image with query parameters
                return imageUrlBuilder.getUrl();
            }
            return null;
        }
    },
    created() {
        this.$store.dispatch(Types.actions.LOAD_CLASS, this.$route.params.classCodename);
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
</style>
