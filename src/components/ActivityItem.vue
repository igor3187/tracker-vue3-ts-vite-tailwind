<script setup lang="ts">
import RemainingActivitySeconds from "@/components/RemainingActivitySeconds.vue";
import BaseButton from "@/components/BaseButton.vue"
import BaseIcon from "@/components/BaseIcon.vue"
import BaseSelect from "@/components/BaseSelect.vue"
import {BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS} from '@/constans'
import {ICON_TRASH} from '@/icons'
import {isActivityValid} from '@/validators'
import {updateActivity, deleteActivity} from '@/activities'
import {resetTimelineItemActivity, timelineItems} from '@/timelineItems'

defineProps({
    activity: {
        type: Object,
        required: true,
        validator: isActivityValid
    },
})

const deleteAndResetActivities = (activity) => {
    resetTimelineItemActivity(timelineItems.value, activity)
    deleteActivity(activity)
}
</script>

<template>
    <li class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
            <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivities(activity)">
                <BaseIcon :name="ICON_TRASH"/>
            </BaseButton>
            <span class="truncate text-xl">{{activity.name}}</span>
        </div>
        <div class="flex gap-2">
            <BaseSelect
                class="font-mono grow"
                placeholder="hh:mm"
                :options="PERIOD_SELECT_OPTIONS"
                :selected="activity.secondsToComplete || null"
                @select="updateActivity(activity, { secondsToComplete: $event || 0 })"
            />
            <RemainingActivitySeconds v-show="activity.secondsToComplete" :activity="activity"/>
        </div>
    </li>
</template>


<style scoped>

</style>