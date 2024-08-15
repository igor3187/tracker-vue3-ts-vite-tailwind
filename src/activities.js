import {id} from '@/functions'
import {computed, ref} from "vue"
import {HUNDRED_PERCENT} from "@/constans.js"

const generateActivities = () => {
    return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
        id: id(),
        name,
        secondsToComplete: 15 * 60 //hours * SECOND_IN_HOUR
    }))
}

const generateActivitySelectOptions = (activities) => activities.map((activity) => ({
    value: activity.id,
    label: activity.name
}))

const totalActivitySecondsToComplete = computed(() => {
    return trackedActivities.value
        .map(({secondsToComplete}) => secondsToComplete )
        .reduce((total, seconds) => total + seconds, 0)
})

export const activities = ref(generateActivities())
export const trackedActivities = computed(() => activities.value.filter(({secondsToComplete}) => secondsToComplete))
export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export const createActivity = (activity) => activities.value.push(activity)
export const deleteActivity = (activity) => activities.value.splice(activities.value.indexOf(activity), 1)
export const updateActivity = (activity, fields) => Object.assign(activity, fields)
export const calculateActivityCompilationPercentage = ({secondsToComplete}, trackedSeconds) => Math.floor((trackedSeconds * HUNDRED_PERCENT) / secondsToComplete)
export const calculateCompilationPercentage = (totalTrackedSeconds) => Math.floor((totalTrackedSeconds * HUNDRED_PERCENT) / totalActivitySecondsToComplete.value)
