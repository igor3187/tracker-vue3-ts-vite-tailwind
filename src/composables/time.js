import {computed, ref} from "vue";
import {
    HUNDRED_PERCENT,
    MILLISECONDS_IN_SECOND,
    SECOND_IN_DAY,
} from "@/constans.js"

const timer = ref(null)
const secondsSinceMidnight = computed(() => (now.value - midNight.value) / MILLISECONDS_IN_SECOND)

export const now = ref(new Date())
export const midNight = computed(() => new Date(now.value).setHours(0,0,0,0))
export const secondsSinceMidnightInPercentage = computed(() => (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECOND_IN_DAY)
export const stopTimer = () => clearInterval(timer.value)
export const startTimer = () => {
    now.value = new Date()
    timer.value = setInterval(() => {
        now.value = new Date(now.value.getTime() + 5 * 60 * MILLISECONDS_IN_SECOND)
    }, MILLISECONDS_IN_SECOND)
}