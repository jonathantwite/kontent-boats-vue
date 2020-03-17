<template>
    <main class="home">
        <portal to="page-header">
            <hero-header :image="image" title="Dinghy Classes"></hero-header>
        </portal>
        <article>
            <h2>A Kontent project</h2>
        </article>
    </main>
</template>

<script>
import { getItem } from '@/api/kentico';
import HeroHeader from '@/components/layout/HeroHeader';
import { getOGImageUrl } from '@/Utilities/kentico';

export default {
    name: 'Home',
    data() {
        return {
            image: ''
        };
    },
    created() {
        getItem('homepage_hero')
            .then(response => {
                this.image = response.item.image.value[0];
            });
    },
    metaInfo() {
        return {
            title: 'Dinghy Classes',
            meta: [
                { vmid: 'description', name: 'description', content: 'The various dinghy classes that you may come across sailing in the UK' },
                { vmid: 'og:title', name: 'og:title', content: 'Dinghy Classes' },
                { vmid: 'og:image', name: 'og:image', content: getOGImageUrl(this.image.url) }
            ]
        };
    },
    components: {
        HeroHeader
    }
};
</script>
