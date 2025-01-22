<script setup lang="ts">
import { ref, watch } from 'vue';


const time = ref<number>(0)
let timer: number | null = null;
const hours = ref<number>(0)
const minutes = ref<number>(0)
const seconds = ref<number>(0)


function startTimer(){
    if (!timer){
        timer = setInterval(() => {
            time.value = time.value + 1
        }, 1000)
    }

}

function pouseTimer(){
    if (timer){
        clearInterval(timer)
        timer = null
    }
}

function stopTimer(){
    pouseTimer()
    time.value = 0
}

function countingTime(){
    hours.value = Math.floor(time.value / 3600)
    minutes.value = Math.floor((time.value % 3600) / 60)
    seconds.value = time.value % 60
}

watch(time, () => {
    countingTime()
})



</script>

<template>
    <div class="timer-container">
        <div class="timer-body">
            <p>{{ hours<10 ? '0' + hours : hours }}:{{ minutes<10 ? '0' + minutes : minutes }}:{{ seconds<10 ? '0' + seconds : seconds }}</p>
            <!-- <img src="@/assets/icons/TimerReset.svg" alt="" class="timer-reset"> -->
        </div>
        <div class="timer-controlls">
            <img src="@/assets/icons/TimerPlay.svg" alt="" class="timer-start" @click="startTimer">
            <img src="@/assets/icons/TimerPause.svg" alt="" class="timer-pause" @click="pouseTimer">
            <img src="@/assets/icons/TimerStop.svg" alt="" class="timer-stop" @click="stopTimer">

        </div>
    </div>
</template>

<style scoped>

img{
    width: 70px;
    border-radius: 8px;
}

.timer-container{
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
}

.timer-body{
    font-size: 120px;
    position: relative;
}

.timer-controlls{
    display: flex;
    gap: 2rem;
}

img:hover{
    cursor: pointer;
    background-color: #3B3B3B;
}

/*.timer-reset{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-40%) translateX(150%);
}*/
</style>