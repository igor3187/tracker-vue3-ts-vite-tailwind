<script setup lang="ts">
import { navigate } from '@/router'
import { ICON_CHECK_CIRCLE } from '@/icons'
import { PAGE_PROGRESS } from "@/constans";
import BaseIcon from "@/components/BaseIcon.vue"
</script>

<template>
    <a class="text-sm" :href="`#${PAGE_PROGRESS}`" @click="navigate(PAGE_PROGRESS)">
        <div class="flex items-center gap-1">
            Day complete!
            <BaseIcon class="h-7 text-green-500" :name="ICON_CHECK_CIRCLE"/>
        </div>
        <div class="flex items-center gap-1">
            <div>Progress: <span class="font-mono">20%</span></div>
            <div class="h-3 w-3 rounded-full bg-red-500"></div>
        </div>
    </a>
</template>

<style scoped>

</style>