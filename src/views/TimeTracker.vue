<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import Timer from '@/components/Timer.vue';

</script>

<template>
    <main class="main">
        <PageTitle title="Таск трекер"/>
        <div class="main_body">
            <Timer/>
        </div>

    </main>
</template>

<style scoped>

.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>