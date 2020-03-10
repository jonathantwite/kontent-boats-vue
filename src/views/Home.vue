<template>
    <div class="home">
        <header>
            <h1>Dinghy Classes</h1>
            <p>A Kontent project</p>
        </header>
    </div>
</template>

<script>
import { Types } from '@/store/modules/classes';

export default {
    name: 'Home',
    components: {
    },
    created() {
        this.$store.dispatch(Types.actions.LOAD_CLASSES);
    }
};
</script>
