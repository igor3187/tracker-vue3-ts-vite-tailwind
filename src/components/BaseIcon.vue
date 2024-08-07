<script setup lang="ts">
import {ICONS} from '@/icons'
import {isIconValid} from '@/validators'

defineProps({
    name: {
        type: String,
        required: true,
        validator: isIconValid,
    },
})


</script>

<template>
    <component :is="ICONS[name]" :class="$attrs.class || 'h-8'" />
</template>

<style scoped>

</style>