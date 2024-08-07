<script setup lang="ts">
import BaseSelect from "@/components/BaseSelect.vue"
import TimeLineHour from "@/components/TimeLineHour.vue"
import TimeLineStopWatch from "@/components/TimeLineStopWatch.vue"
import {isTimelineItemValid} from '@/validators'
import {updateTimelineItem} from "@/timelineItems"
import {activitySelectOptions} from "@/activities"

defineOptions({
    inheritAttrs: false,
})

defineProps({
    timelineItem: {
        type: Object,
        required: false,
        validator: isTimelineItemValid,
    },
})
</script>

<template>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
        <TimeLineHour :hour="timelineItem.hour" />
        <BaseSelect
            placeholder="Rest"
            :selected="timelineItem.activityId"
            :options="activitySelectOptions"
            @select="updateTimelineItem(timelineItem, {activityId: $event})"
        />
        <TimeLineStopWatch
            :timeline-item="timelineItem"
        />
    </li>
</template>

<style scoped>

</style>