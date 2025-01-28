<script setup lang="ts">
import { onMounted, ref } from 'vue';



interface Props{
    title: string,
}

const props = defineProps<Props>()
const isMounted = ref<boolean>(false)


onMounted(() => {
    setTimeout(() => {
        isMounted.value = true;
    }, 0);
})

</script>

<template>
    <div class="title-container">
        <h1 :class="{'title': true, 'animation': isMounted.valueOf()}">{{  props.title }}</h1>
    </div>

</template>

<style scoped>
.title{
    font-size: 40px;
    padding: 1rem 2rem;
    background-color: #C3073F;
    border-radius: 0 0 8px 8px;
    transform: translateY(-100%);
    transition: 0.5s all ease-in-out;
}

.animation{
    transform: translateY(0);
}
</style>