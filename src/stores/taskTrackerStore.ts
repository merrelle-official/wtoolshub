import { defineStore } from "pinia";
import { ref } from "vue";

export interface Task {
    name: string,
    hours: number,
    minutes: number,
    seconds: number,
    id: number
}

export const useTaskTrackerStore = defineStore('taskTracker', () => {
    const tasks = ref<Task[]>([])
    const addTask = (task: Task) => {
        tasks.value.push(task)
    }
    const removeTask = (id: number) => {
        tasks.value = tasks.value.filter(task => task.id !== id)
    }
    return {
        tasks,
        addTask,
        removeTask
    }
})