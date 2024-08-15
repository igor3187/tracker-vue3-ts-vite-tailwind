import {computed} from "vue";
import {calculateTrackedActivitySeconds, timelineItems} from "@/timelineItems.js";
import {calculateCompilationPercentage, trackedActivities} from "@/activities.js";
import {getProgressColorClass} from "@/functions.js";

export const useTotalProgress = () => {
    const colorClass = computed(() => getProgressColorClass(percentage.value))
    const percentage = computed(() => calculateCompilationPercentage(totalTrackedSeconds.value))
    const totalTrackedSeconds = computed(() => {
        return trackedActivities.value
            .map((activity) => Math.min(calculateTrackedActivitySeconds(timelineItems.value, activity), activity.secondsToComplete))
            .reduce((total, seconds) => total + seconds, 0)
    })

    return {
        percentage,
        colorClass,
    }
}