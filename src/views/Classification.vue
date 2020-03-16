<template>
    <main>
        <portal to="page-header">
            <hero-header :imageUrl="headerImageUrl" :title="classificationName"></hero-header>
        </portal>
        <article>
            <collection-view :name="classificationName" :dinghyClasses="dinghyClasses"></collection-view>
        </article>
    </main>
</template>

<script>
// This component shows the dinghy classes currently in Vuex store for the selected classification
// while despatching a request for the latest data from the Kontent API.
// When this data is loaded, the component updates with the updated data.
import { ImageUrlBuilder, ImageCompressionEnum } from '@kentico/kontent-delivery';
import CollectionView from '@/components/layout/CollectionView';
import HeroHeader from '@/components/layout/HeroHeader';
import { Types } from '@/store';

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
    computed: {
        classification() { return this.$store.getters.GET_CLASSIFICATION(this.$route.params.codename); },
        dinghyClasses() { return this.$store.getters.GET_CLASSES_IN_CLASSIFICATION(this.classificationCodename); },
        classificationName() { return this.classification !== undefined ? this.classification.name : ''; },
        classificationCodename() { return this.classification !== undefined ? this.classification.codename : ''; },
        headerImageUrl() {
            if (!this.dinghyClasses || this.dinghyClasses.length === 0) {
                return undefined;
            }
            const i = getRandomInt(0, this.dinghyClasses.length - 1);
            const url = this.dinghyClasses[i].image.value[0].url;

            const imageUrlBuilder = new ImageUrlBuilder(url)
                .withDpr(2)
                .withCompression(ImageCompressionEnum.Lossless)
                .withQuality(80)
                .withWidth(1920);

            // get url to image with query parameters
            return imageUrlBuilder.getUrl();
        }
    },
    watch: {
        classification: function(val) {
            if (val === null) {
                return;
            }
            return this.$store.dispatch(Types.actions.LOAD_CLASSES_BY_CLASSIFICATION, this.classification.codename);
        }
    },
    created() {
        if (this.classification) {
            return this.$store.dispatch(Types.actions.LOAD_CLASSES_BY_CLASSIFICATION, this.classification.codename);
        }
    },
    components: {
        CollectionView,
        HeroHeader
    }
};
</script>
