import { defineStore } from "pinia";
import { ref} from "vue";
import { v4 as uuidv4 } from 'uuid';

export interface Task {
    name: string,
    time: number,
    id: string
}

export const useTaskTrackerStore = defineStore('taskTracker', () => {
    const tasks = ref<Task[]>([])


    const currentTask = ref<Task>({
        name: '',
        time: 0,
        id: ''
    })

    const addTask = (task: Task) => {

        if (task){
            if (tasks.value.find(t => t.id === task.id)){
                removeTask(task.id)
            }
            if (task.name === ''){
                task.name = 'Новая таска'
            }
            task.id = uuidv4()
            tasks.value.push(task)

            currentTask.value = {
                name: '',
                time: 0,
                id: ''
            }
        }
    }

    const removeTask = (id: string) => {
        tasks.value = tasks.value.filter(task => task.id !== id)
    }

    function countingTime(time : number) : string {
        let countedTime : string = ''
        countedTime += Math.floor(time / 3600)<10 ? '0' + Math.floor(time / 3600) + ':' : Math.floor(time / 3600) + ':'
        countedTime += Math.floor((time % 3600) / 60)<10 ? '0' + Math.floor((time % 3600) / 60) + ':' : Math.floor((time % 3600) / 60) + ':'
        countedTime += time % 60<10 ? '0' + time % 60 : time % 60
        return countedTime
    }

    return {
        currentTask,
        countingTime,
        tasks,
        addTask,
        removeTask
    }
})