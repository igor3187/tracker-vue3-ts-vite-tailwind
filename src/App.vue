<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue"
import TheNav from "@/components/TheNav.vue"
import { currentPage, routes } from "@/router"
</script>

<template>
    <TheHeader />
    <main class="flex flex-grow flex-col">
        <KeepAlive>
            <component :is="routes[currentPage]" />
        </KeepAlive>
<!--        <TheTimeLine v-show="currentPage === PAGE_TIMELINE" />-->
<!--        <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />-->
<!--        <TheProgress v-show="currentPage === PAGE_PROGRESS"/>-->
    </main>
    <TheNav />
</template>

<style scoped>

</style>
