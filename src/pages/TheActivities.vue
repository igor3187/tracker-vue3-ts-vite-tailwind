<script setup lang="ts">
import ActivityItem from "@/components/ActivityItem.vue"
import TheActivityForm from "@/components/TheActivityForm.vue"
import TheActivitiesEmptyState from "@/components/TheActivitiesEmptyState.vue";
import {activities} from '@/activities'
</script>

<template>
    <div class="flex flex-col grow">
        <ul v-if="activities.length" class="divide-y grow">
            <ActivityItem
                v-for="activity in activities"
                :key="activity.id"
                :activity="activity"
            />
        </ul>
        <TheActivitiesEmptyState v-else class="grow" />
        <TheActivityForm />
    </div>
</template>

<style scoped>

</style>