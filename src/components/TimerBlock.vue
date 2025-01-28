<script setup lang="ts">
import { ref } from 'vue';
import Timer from './Timer.vue';
import { useTaskTrackerStore} from '@/stores/taskTrackerStore';

const tasksStore = useTaskTrackerStore()

type TimerInstance = {
  stopTimer: () => void;
};

const timerComponent = ref<TimerInstance | null>(null);


function saveTask(e: Event){
    e.preventDefault()
    if (timerComponent.value) {
        timerComponent.value.stopTimer();
    }
    tasksStore.addTask(tasksStore.currentTask);
}

</script>

<template>
    <div class="timer-block">
        <Timer ref="timerComponent"/>
        <form class="input-task">
            <input type="text" placeholder="Enter task name" class="input-task__name" v-model="tasksStore.currentTask.name"/>
            <button class="save-task" @click="saveTask">Сохранить таску</button>
        </form>
    </div>
</template>

<style scoped>
.timer-block{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2rem;
    flex-basis: 50%;
}

.input-task{
    display: flex;
    gap: 1rem;
}

.input-task__name{
    width: 400px;
    max-width: 400px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 0 1rem;
    font-size: 18px;
}

.save-task{
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: #3B3B3B;
    color: #fff;
    font-size: 18px;
    padding: 0 1rem;
    cursor: pointer;
}
</style>