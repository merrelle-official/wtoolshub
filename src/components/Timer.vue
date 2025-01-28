<script setup lang="ts">
import { useTaskTrackerStore } from '@/stores/taskTrackerStore';
import { computed, ref} from 'vue';

const countedTime = computed(() => trackStore.countingTime(trackStore.currentTask.time));
let timer: number | NodeJS.Timeout | null;

const trackStore = useTaskTrackerStore()

defineExpose({
    stopTimer
})

const timerIsStarted = ref<boolean>(false)

function startTimer(){
    if (!timer){
        timer = setInterval(() => {
            trackStore.currentTask.time = trackStore.currentTask.time + 1
        }, 1000)
        timerIsStarted.value = true
    }


}

function pauseTimer(){
    if (timer){
        clearInterval(timer)
        timer = null
    }
    timerIsStarted.value = false

}

function stopTimer(){
    pauseTimer()
    trackStore.currentTask.time = 0;
}

</script>

<template>
    <div class="timer-container">
        <div class="timer-body">
            <p>{{ countedTime.valueOf() }}</p>
        </div>
        <div class="timer-controlls">
            <img v-if="!timerIsStarted" src="@/assets/icons/TimerPlay.svg" alt="" class="timer-start" @click="startTimer">
            <img v-else src="@/assets/icons/TimerPause.svg" alt="" class="timer-pause" @click="pauseTimer">
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

</style>