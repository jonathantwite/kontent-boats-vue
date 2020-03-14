<template>
    <main>
        <portal to="page-header">
            <header class="hero-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
                <h1>{{data?data.class_name.value:''}}</h1>
            </header>
        </portal>
        <article>
            <div>
                <p>
                    <span v-for="classification in data.classification.value" :key="classification.codename">
                        {{classification.name}}
                    </span>
                    {{data.design_type.value[0].name}} with PY: {{data.py_number.value}}
                </p>
                <span v-html="data.information.value"></span>
            </div>
            <div>
                <h3>Builders</h3>
                <p v-for="builder in data.builders.value" :key="builder.system.codename">{{builder.builder_name.value}} ({{builder.location.value}})</p>
            </div>
        </article>
    </main>
</template>

<script>
import { ImageUrlBuilder, ImageCompressionEnum } from '@kentico/kontent-delivery';
import { Types } from '@/store';
export default {
    computed: {
        data() { return this.$store.getters.GET_CLASS(this.$route.params.codename); },
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
        this.$store.dispatch(Types.actions.LOAD_CLASS, this.$route.params.codename);
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
