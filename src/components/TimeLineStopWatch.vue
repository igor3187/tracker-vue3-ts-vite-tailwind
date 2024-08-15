<script setup lang="ts">
import {BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, BUTTON_TYPE_DANGER} from '@/constans'
import {ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY} from '@/icons'
import BaseButton from "@/components/BaseButton.vue";
import BaseIcon from "@/components/BaseIcon.vue"
import {isTimelineItemValid} from '@/validators'
import {updateTimelineItem} from '@/timelineItems'
import {formatSeconds, currentHour} from '@/functions'
import {useStopWatch} from '@/composables/stopwatch'
import {watchEffect} from "vue";

const props = defineProps({
    timelineItem: {
        type: Object,
        required: true,
        validator: isTimelineItemValid,
    }
})

const {seconds, isRunning, start, stop, reset} = useStopWatch(props.timelineItem.activitySeconds)

watchEffect(() => updateTimelineItem(props.timelineItem, {activitySeconds: seconds.value}))
</script>

<template>
    <div class="flex w-full gap-2">
        <BaseButton :type="BUTTON_TYPE_DANGER"
                    :disabled="!seconds"
                    @click="reset"
        >
            <BaseIcon :name="ICON_ARROW_PATH"/>
        </BaseButton>
        <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
            {{ formatSeconds(seconds) }}
        </div>
        <BaseButton v-show="isRunning"
                    :type="BUTTON_TYPE_WARNING"
                    @click="stop"
        >
            <BaseIcon :name="ICON_PAUSE"/>
        </BaseButton>
        <BaseButton v-show="!isRunning"
                    :type="BUTTON_TYPE_SUCCESS"
                    :disabled="timelineItem.hour !== currentHour()"
                    @click="start"
        >
            <BaseIcon :name="ICON_PLAY"/>
        </BaseButton>
    </div>
</template>

<style scoped>

</style>