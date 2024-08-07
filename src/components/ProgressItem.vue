<script setup lang="ts">
import {formatSeconds} from "@/functions"
import {isActivityValid} from "@/validators"
import {useProgress} from "@/composables/progress"
const props = defineProps({
    activity: {
        type: Object,
        required: true,
        validator: isActivityValid,
    }
})

// const color = ['red', 'yellow', 'blue', 'green'][props.index]
// const progress = [10, 50, 70, 100][props.index]
// const timeProgress = ['03:00 / 30:00', '15:00 / 30:00', '21:00 / 30:00', '30:00 / 30:00'][props.index]

const {colorClass, percentage, trackedSeconds} = useProgress(props.activity)
</script>

<template>
    <li class="flex flex-col gap-1 p-4">
        <div class="truncate text-xl">{{activity.name}}</div>
        <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
            <div :class="colorClass" :style="`width: ${percentage}%`"></div>
        </div>
        <div class="flex justify-between font-mono text-sm">
            <span>{{percentage}}%</span>
            <span>{{formatSeconds(trackedSeconds)}} / {{formatSeconds(activity.secondsToComplete)}}</span>
        </div>
    </li>

</template>

<style scoped>

</style>