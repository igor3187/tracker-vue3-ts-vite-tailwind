import {computed} from "vue";
import {calculateTrackedActivitySeconds, timelineItems} from "@/timelineItems.js";
import {calculateActivityCompilationPercentage} from "@/activities.js";
import {getProgressColorClass} from "@/functions.js";

export const useProgress = (activity) => {
    const colorClass = computed(() => getProgressColorClass(percentage.value))
    const percentage = computed(() => calculateActivityCompilationPercentage(activity, trackedActivitySeconds.value))
    const trackedActivitySeconds = computed(() => calculateTrackedActivitySeconds(timelineItems.value, activity))

    return {
        trackedActivitySeconds,
        percentage,
        colorClass,
    }
}