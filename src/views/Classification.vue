<template>
    <collection-view :name="classificationName" :dinghyClasses="dinghyClasses"></collection-view>
</template>

<script>
// This component shows the dinghy classes currently in Vuex store for the selected classification
// while despatching a request for the latest data from the Kontent API.
// When this data is loaded, the component updates with the updated data.
import CollectionView from '@/components/layout/CollectionView';
import { Types } from '@/store';
export default {
    computed: {
        classification() { return this.$store.getters.GET_CLASSIFICATION_BY_NAME(this.$route.params.classificationName); },
        dinghyClasses() { return this.$store.getters.GET_CLASSES_IN_CLASSIFICATION(this.classificationCodename); },
        classificationName() { return this.classification !== undefined ? this.classification.name : ''; },
        classificationCodename() { return this.classification !== undefined ? this.classification.codename : ''; }
    },
    watch: {
        classification: function(val) {
            if (val === null) {
                return;
            }
            return this.$store.dispatch(Types.actions.LOAD_CLASSES_BY_CLASSIFICATION, this.classification.codename);
        }
    },
    components: {
        CollectionView
    }
};
</script>
