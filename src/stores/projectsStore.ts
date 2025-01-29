import { defineStore } from "pinia";
import timerIcon from '@/assets/icons/Timer.svg'
import qrgeneratorIcon from '@/assets/icons/Qrgenerator.svg'

interface Project{
    name: string,
    img: string,
    link: string,
    id: number
}

export const useProjectsStore = defineStore('projectsStore', () => {

    const projects: Project[] = [
        {name: 'Таск трекер', img: timerIcon, link: 'TimeTracker', id: 1},
        {name: 'Генератор QR', img: qrgeneratorIcon, link: 'QRgenerator', id: 2},
    ]

    return {
        projects
    }
})