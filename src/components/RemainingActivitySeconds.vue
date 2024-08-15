<script setup lang="ts">
import {formatSecondsWithSign} from '@/functions'
import {calculateTrackedActivitySeconds, timelineItems} from '@/timelineItems'
import {isActivityValid} from '@/validators'
import {computed} from "vue";

const props = defineProps({
    activity: {
        type: Object,
        required: true,
        validator: isActivityValid,
    },
})

const remainingSeconds = computed(() => calculateTrackedActivitySeconds(timelineItems.value,props.activity) - props.activity?.secondsToComplete)
const classes = computed(() => [
    'flex items-center rounded px-2 font-mono text-xl',
    remainingSeconds.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600',
])
</script>

<template>
    <div :class="classes">
        {{ formatSecondsWithSign(remainingSeconds)}}
    </div>
</template>

<style scoped>

</style>