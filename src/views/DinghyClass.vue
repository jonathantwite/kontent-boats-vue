<template>
    <main>
        <portal to="page-header">
            <hero-header :image="image" :title="data?data.class_name.value:''" :floatingImage="classLogoImage"></hero-header>
        </portal>
        <article v-if="data">
            <h2>{{data.class_name.value}}</h2>
            <builders-box :builders="data.builders.value"></builders-box>
            <div>
                <p class="lead">
                    <span v-for="classification in data.classification.value" :key="classification.codename">
                        {{classification.name}}
                    </span>
                    {{data.design_type.value[0].name}} with PY: {{data.py_number.value}}
                </p>
                <p><span v-html="data.information.value"></span></p>
            </div>
        </article>
    </main>
</template>

<script>
import { Types } from '@/store';
import HeroHeader from '@/components/layout/HeroHeader';
import BuildersBox from '@/components/BuildersBox';

export default {
    computed: {
        data() { return this.$store.getters.GET_CLASS(this.$route.params.codename); },
        image: function() {
            if (this.data) {
                return this.data.image.value[0];
            }
            return null;
        },
        classLogoImage: function() {
            if (this.data) {
                return this.data.class_symbol.value[0];
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
