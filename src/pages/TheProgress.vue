<script setup lang="ts">
import ProgressItem from "@/components/ProgressItem.vue"
import { trackedActivities } from "@/activities"
</script>

<template>
    <ul class="divide-y">
        <ProgressItem v-for="activity in trackedActivities" :key="activity.id"  :activity="activity" />
    </ul>
</template>

<style scoped>

</style>