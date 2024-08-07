<script setup lang="ts">
import TheHeaderLogo from "@/components/TheHeaderLogo.vue";
import TheHeaderProgress from "@/components/TheHeaderProgress.vue";
import {isPageValid} from '@/validators'

defineEmits({
    navigate: isPageValid
})
</script>

<template>
    <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
        <TheHeaderLogo />
        <TheHeaderProgress />
    </header>
</template>

<style scoped>

</style>