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
    components: {
        HeroHeader
    }
};
</script>
