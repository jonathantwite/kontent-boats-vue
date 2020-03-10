<template>
    <div class="dinghy-class-card">
        <h3>{{data.class_name.value}}</h3>
        <p>PY: {{data.py_number.value}}</p>
        <img :src="imageUrl" class="dinghy-image" />
        <p>{{data.design_type.value[0].name}}</p>
        <a target="_blank" :href="data.association_website">Website</a>
    </div>
</template>

<script>
import { ImageUrlBuilder, ImageCompressionEnum } from '@kentico/kontent-delivery';
export default {
    name: 'dinghy-class-card',
    props: {
        data: Object
    },
    computed: {
        imageUrl: function() {
            const imageUrlBuilder = new ImageUrlBuilder(this.data.image.value[0].url)
                .withDpr(2)
                .withCompression(ImageCompressionEnum.Lossless)
                .withQuality(40)
                .withHeight(150)
                .withWidth(300);

            // get url to image with query parameters
            return imageUrlBuilder.getUrl();
        }
    }
};
</script>

<style lang="scss" scoped>
.dinghy-class-card {
    border: 1px solid #777;
    width: 300px;
    min-height: 400px;
    overflow: hidden;

    margin-left: 10px;
}
.dinghy-image {
    width: 300px;
    height: 150px;
    object-fit: cover;
}

</style>
