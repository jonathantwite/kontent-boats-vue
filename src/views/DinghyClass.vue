<template>
    <main>
        <portal to="page-header">
            <hero-header :imageUrl="imageUrl" :title="data?data.class_name.value:''"></hero-header>
        </portal>
        <article v-if="data">
            <h2>{{data.class_name.value}}</h2>
            <div>
                <p>
                    <span v-for="classification in data.classification.value" :key="classification.codename">
                        {{classification.name}}
                    </span>
                    {{data.design_type.value[0].name}} with PY: {{data.py_number.value}}
                </p>
                <span v-html="data.information.value"></span>
            </div>
            <builders-box :builders="data.builders.value"></builders-box>
        </article>
    </main>
</template>

<script>
import { ImageUrlBuilder, ImageCompressionEnum } from '@kentico/kontent-delivery';
import { Types } from '@/store';
import HeroHeader from '@/components/layout/HeroHeader';
import BuildersBox from '@/components/BuildersBox';

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
    },
    components: {
        HeroHeader,
        BuildersBox
    }
};
</script>

<style lang="scss" scoped>

</style>
