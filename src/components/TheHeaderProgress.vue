<script setup lang="ts">
import { navigate } from '@/router'
import { useTotalProgress } from '@/composables/total-progress'
import { ICON_CHECK_CIRCLE } from '@/icons'
import { HUNDRED_PERCENT, PAGE_PROGRESS } from "@/constans";
import BaseIcon from "@/components/BaseIcon.vue"

const {colorClass, percentage} = useTotalProgress()
</script>

<template>
    <a class="text-sm" :href="`#${PAGE_PROGRESS}`" @click="navigate(PAGE_PROGRESS)">
        <div v-if="percentage < HUNDRED_PERCENT" class="flex items-center gap-1">
            <div>Progress: <span class="font-mono">{{percentage}}%</span></div>
            <div :class="`h-3 w-3 rounded-full ${colorClass}`"></div>
        </div>
        <div v-else class="flex items-center gap-1">
            Day complete!
            <BaseIcon class="h-7 text-green-500" :name="ICON_CHECK_CIRCLE"/>
        </div>
    </a>
</template>

<style scoped>

</style>