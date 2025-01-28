<script setup lang="ts">
import { ref } from 'vue';
import PageTitle from '@/components/PageTitle.vue';
import TimerBlock from '@/components/TimerBlock.vue';
import { useTaskTrackerStore } from '@/stores/taskTrackerStore';

const tasksStore = useTaskTrackerStore();
const hoveredTaskId = ref<string | null>(null);

function chooseTask(id: string) {
    tasksStore.currentTask = tasksStore.tasks.find(task => task.id === id) || {
        name: '',
        time: 0,
        id: ''
    }
    console.log(tasksStore.tasks.find(task => task.id === id));
}

function removeTask(id: string) {
    tasksStore.removeTask(id);
    if (tasksStore.currentTask.id === id) {
        chooseTask('');
    }
}

function editTask(id: string) {
    chooseTask(id);
}
</script>

<template>
    <main class="main">
        <PageTitle title="Таск трекер"/>
        <div class="main_body">
            <div class="tasks">
                <h2 class="title-block">Таски</h2>
                <ul class="tasks-list">
                    <li class="task newtask" @click="chooseTask('')">
                        <img src="@/assets/icons/NewTask.svg" alt="Создать новую таску">
                    </li>
                    <li v-for="task in [...tasksStore.tasks].reverse()" :key="task.id" class="task"
                        @mouseover="hoveredTaskId = task.id" @mouseleave="hoveredTaskId = null">
                        <p>{{ task.name }}</p>
                        <p>{{ tasksStore.countingTime(task.time) }}</p>
                        <div class="task-buttons">
                            <button v-if="hoveredTaskId === task.id" @click.stop="editTask(task.id)" class="edit-button">Редактировать</button>
                            <button v-if="hoveredTaskId === task.id" @click.stop="removeTask(task.id)" class="close-button">Удалить</button>
                        </div>

                    </li>
                </ul>
            </div>
            <TimerBlock/>
        </div>
    </main>
</template>

<style scoped>
.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main_body {
    display: flex;
    gap: 2rem;
    width: 100%;
}

.tasks {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    align-items: center;
    margin-top: 2rem;
    flex-basis: 50%;
}

.task:hover {
    background-color: #3B3B3B;
    cursor: pointer;
}

.title-block {
    font-size: 24px;
    margin: 0;
}

.tasks-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 70%;
    padding: 0;
}

.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #4E4E50;
    border-radius: 8px;
    width: 100%;
    position: relative;
}

.newtask {
    display: flex;
    justify-content: center;
}

.task-buttons {
    position: absolute;
    right: 0;
    margin-right: 1rem;
    display: flex;
    gap: 1rem;
}

.close-button {
    background-color: #C3073F;
}



button {
    border: none;
    color: white;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    cursor: pointer;
}



</style>