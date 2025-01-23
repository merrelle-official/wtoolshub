<script setup lang="ts">
import SidebarMenu from '@/components/SidebarMenu.vue';
import { RouterView } from 'vue-router';



</script>

<template>
    <SidebarMenu/>
    <div class="main-page">
        <RouterView />
    </div>

</template>

<style scoped>
/*
Основной фон: #1A1A1D
Второстепенный: #4E4E50
Основной акцентный: #C3073F
Второстепенный акцентный: #6F2232
Ховеры: #950740
*/

.main-page{
    padding-left: 3.5rem;
    margin: 0;
}
</style>
