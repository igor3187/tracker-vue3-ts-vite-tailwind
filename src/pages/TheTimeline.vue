<script setup lang="ts">
import TimeLineItem from '@/pages/TimelineItem.vue'
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue'
import {onActivated} from 'vue'
import {timelineItems, timelineItemRefs, scrollToCurrentHour} from '@/timelineItems'

// watchPostEffect(async () => {
//     if (currentPage.value === PAGE_TIMELINE) {
//         await nextTick()
//         scrollToCurrentHour(false)
//     }
// })
onActivated(scrollToCurrentHour)
</script>

<template>
    <div class="relative mt-7">
        <TheTimelineIndicator />
        <ul>
            <TimeLineItem
                v-for="timelineItem in timelineItems"
                :key="timelineItem.hour"
                :timeline-item="timelineItem"
                ref="timelineItemRefs"
            />
        </ul>
    </div>
</template>

<style scoped>

</style>