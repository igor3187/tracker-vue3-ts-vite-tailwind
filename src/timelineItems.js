import {ref} from "vue"
import {HOURS_IN_DAY, MIDNIGHT_HOUR} from "@/constans.js"
import {currentHour} from "@/functions.js"

const generateTimelineItems = () => {
    return [...Array(HOURS_IN_DAY).keys()].map(hour => ({
        hour,
        activityId: null, //[0, 1, 2, 3, 4].includes(hour) ? activities.value[hour % 3]?.id : null,
        activitySeconds: 0, //[0, 1, 2, 3, 4].includes(hour) ? hour * 600 : 0,
    }))
}

export const timelineItems = ref(generateTimelineItems())
export const timelineItemRefs = ref([])

export const filterTimelineItemsByActivity = (timelineItems, {id}) => timelineItems.filter(({activityId}) => activityId === id)
export const calculateTrackedActivitySeconds = (timelineItems, activity) => {
    return filterTimelineItemsByActivity(timelineItems, activity)
        .map(({activitySeconds}) => activitySeconds)
        .reduce((total, seconds) => Math.round(total + seconds), 0)
}
// Example of 2 func join
export const updateTimelineItem = (timelineItem, fields) => Object.assign(timelineItem, fields)
// export const setTimelineItemActivity = (timelineItem, activityId) => timelineItem.activityId = activityId
// export const updateTimelineActivitySeconds = (timelineItem, activitySeconds) => timelineItem.activitySeconds = activitySeconds
export const resetTimelineItemActivity = (timelineItems, activity) => {
    timelineItems.value
    filterTimelineItemsByActivity(timelineItems,activity).forEach(timelineItem => updateTimelineItem(timelineItem, {
        activityId: null,
        activitySeconds: 0,
    }))
}
export const scrollToHour = (hour, isSmooth = true) => {
    const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1]?.$el

    el.scrollIntoView({behavior: isSmooth ? 'smooth' : 'instant'})
}
export const scrollToCurrentHour = (isSmooth = false) => scrollToHour(currentHour(), isSmooth)