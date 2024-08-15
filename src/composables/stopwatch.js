import {ref, watch} from "vue"
import {MILLISECONDS_IN_SECOND} from "@/constans.js"

export const useStopWatch = (initialSeconds) => {
    const temp = 120
    const seconds = ref(initialSeconds)
    const isRunning = ref(false)

    const start = () => {
        isRunning.value = setInterval(() => (seconds.value += temp), MILLISECONDS_IN_SECOND)
    }
    const stop = () => {
        clearInterval(isRunning.value)
        isRunning.value = false
    }
    const reset = () => {
        stop()
        seconds.value = 0
    }

    return {
        seconds,
        isRunning,
        start,
        stop,
        reset,
    }
}