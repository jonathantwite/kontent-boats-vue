<template>
    <div class="dinghy-class-card">
        <h3>{{data.class_name.value}}</h3>
        <p>PY: {{data.py_number.value}}</p>
        <img :src="imageUrl" class="dinghy-image" />
        <p>{{data.design_type.value[0].name}}</p>
        <router-link :to="{name: 'DinghyClass', params: {codename: data.system.codename, lang: $route.params.lang}}" class="btn">{{data.class_name.value}}</router-link>
        <a target="_blank" :href="data.association_website.value" class="association-link">{{data.association_name.value}}</a>
    </div>
</template>

<script>
import { getImageUrl } from '@/Utilities/kentico';

export default {
    name: 'dinghy-class-card',
    props: {
        data: Object
    },
    computed: {
        imageUrl: function() {
            return getImageUrl(this.data.image.value[0].url, 300, 150, 40);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts/_variables.scss';

.dinghy-class-card {
    border: 1px solid #777;
    width: 300px;
    min-height: 400px;
    overflow: hidden;

    margin-left: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: $clickable-padding 0;
}
.association-link{
    padding-top: $clickable-padding;
}
.dinghy-image {
    width: 300px;
    height: 150px;
    object-fit: cover;
}

</style>
