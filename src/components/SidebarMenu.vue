<script setup lang="js">
import { ref } from 'vue';

const menubarIsOpened = ref(false)

function openMenubar(){
    menubarIsOpened.value = !menubarIsOpened.value
    console.log(menubarIsOpened.value)
}

</script>

<template>
    <div :class="{'sidebar':true, 'menu_opened':menubarIsOpened.valueOf()}">
        <div>
            <div class="sidebar_burgerbtn icons" @click="openMenubar">
                <img src="@/assets/icons/Burger.svg" alt="burger" >
                <p v-show="menubarIsOpened.valueOf()">Свернуть бургер</p>
            </div>
            <div class="sidebar_burgerbtn icons" @click="openMenubar">
                <img src="@/assets/icons/Timer.svg" alt="timer" >
                <p v-show="menubarIsOpened.valueOf()">Таск трекер</p>
            </div>
        </div>

        <div>
            <div class="sidebar_burgerbtn icons" @click="openMenubar">
                <img src="@/assets/icons/Settings.svg" alt="settings">
                <p v-show="menubarIsOpened.valueOf()">Настройки</p>
            </div>
        </div>


    </div>
</template>

<style lang="css" scoped>
img{
    width: 3.5rem;
    padding: 0.5rem;
    flex-shrink: 0;

}

p{
    text-wrap: nowrap;
    margin: 0;
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