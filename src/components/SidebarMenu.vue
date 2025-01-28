<script setup lang="js">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useProjectsStore } from '@/stores/projectsStore';


const menubarIsOpened = ref(false)
const projectStore = useProjectsStore()

function openMenubar(){
    menubarIsOpened.value = !menubarIsOpened.value
}

</script>

<template>
    <div class="background" v-if="menubarIsOpened.valueOf()" @click="openMenubar"></div>
    <div :class="{'sidebar':true, 'menu_opened':menubarIsOpened.valueOf()}">
        <div>
            <div class="sidebar_burgerbtn icons" @click="openMenubar">
                <img src="@/assets/icons/Burger.svg" alt="burger" >
                <p v-show="menubarIsOpened.valueOf()">Свернуть бургер</p>
            </div>
            <router-link :to="{name: 'Home'}" class="sidebar_burgerbtn icons">
                <img src="@/assets/icons/Home.svg" alt="timer" >
                <p v-show="menubarIsOpened.valueOf()">Домашняя страница</p>
            </router-link>

            <router-link v-for="project in projectStore.projects" :key="project.id" :to="{name: project.link}" class="sidebar_burgerbtn icons">
                <img :src="project.img" alt="" >
                <p v-show="menubarIsOpened.valueOf()">{{project.name}}</p>
            </router-link>
            <!-- <router-link :to="{name: 'TimeTracker'}" class="sidebar_burgerbtn icons">
                <img src="@/assets/icons/Timer.svg" alt="timer" >
                <p v-show="menubarIsOpened.valueOf()">Таск трекер</p>
            </router-link> -->
        </div>
        <div>
            <router-link :to="{name: 'Settings'}" class="sidebar_burgerbtn icons">
                <img src="@/assets/icons/Settings.svg" alt="settings">
                <p v-show="menubarIsOpened.valueOf()">Настройки</p>
            </router-link>
        </div>


    </div>
</template>

<style lang="css" scoped>

.background{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

img{
    width: 3.5rem;
    padding: 0.5rem;
    flex-shrink: 0;

}

p{
    text-wrap: nowrap;
    margin: 0;
}

a{
    text-decoration: none;
    color: white;
}

.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    width: 3.5rem;
    height: 100vh;
    background-color: #4E4E50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    align-items: start;
    transition: all 0.2s ease-in-out;
    z-index: 2;
}

.sidebar>*{
    width: 100%;
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
}

.icons{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 18px;
    overflow: hidden;
}

.icons:hover{
    background-color: #3B3B3B;
    cursor: pointer;
}

.menu_opened{
    width: 20rem;
}
</style>