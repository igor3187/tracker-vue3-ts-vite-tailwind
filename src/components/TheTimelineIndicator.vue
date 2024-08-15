<script setup lang="ts">
import { HUNDRED_PERCENT } from "@/constans";
import { secondsSinceMidnightInPercentage, startTimer, stopTimer } from "@/composables/time";
import {computed, onActivated, onDeactivated, ref} from "vue";

const indicatorRef = ref()

const topOffset = computed(() => secondsSinceMidnightInPercentage.value * getTimelineHeight() / HUNDRED_PERCENT)

const getTimelineHeight = () => indicatorRef.value?.parentNode.getBoundingClientRect().height

onActivated(startTimer)
onDeactivated(stopTimer)
</script>

<template>
    <hr ref="indicatorRef"
        class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600"
        :style="{top: `${topOffset}px`}"
    />
</template>

<style scoped>

</style>