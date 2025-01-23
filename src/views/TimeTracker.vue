<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import TimerBlock from '@/components/TimerBlock.vue';
import { ref } from 'vue';
import { useTaskTrackerStore } from '@/stores/taskTrackerStore';

interface Task {
    name: string,
    hours: number,
    minutes: number,
    seconds: number,
    id: number
}

const tasksStore = useTaskTrackerStore()
const tasks = ref<Task[]>(tasksStore.tasks)

</script>

<template>
    <main class="main">
        <PageTitle title="Таск трекер"/>
        <div class="main_body">
            <div class="tasks">
                <h2 class="title-block">Таски</h2>
                <ul class="tasks-list">
                    <li v-for="task in tasks" :key="task.id" class="task">
                        <p>{{ task.name }}</p>
                        <p>{{ task.hours<10 ? '0' + task.hours : task.hours }}:{{ task.minutes<10 ? '0' + task.minutes : task.minutes }}:{{ task.seconds<10 ? '0' + task.seconds : task.seconds }}
                            </p>
                    </li>

                </ul>
            </div>

            <TimerBlock/>
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

.main_body{
    display: flex;
    gap: 2rem;
    width: 100%;
    
}

.tasks{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    justify-content: start;
    align-items: center;
    margin-top: 2rem;
    flex-basis: 50%;
}

.title-block{
    font-size: 24px;
    margin: 0;
}

.tasks-list{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 70%;
}

.task{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #4E4E50;
    border-radius: 8px;
    width: 100%;
}
</style>