<script setup lang="ts">
import { PAGE_TIMELINE } from '@/constans'
import { navigate, currentPage } from '@/router'
import { scrollToCurrentHour } from '@/timelineItems'

const handleClick = () => currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
</script>

<template>
    <a :href="`#${PAGE_TIMELINE}`" @click="handleClick">
        <img class="h-9" src="../assets/img/logo.png" alt="Logo">
    </a>
</template>

<style scoped>

</style>