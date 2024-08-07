<script setup lang="ts">
import { navigate, currentPage } from "@/router"
import { isNavItemValid } from "@/validators"
import {computed} from "vue";
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
    navItem: {
        type: Object,
        required: true,
        validator: isNavItemValid,
    }
})

const classes = computed(() => [
    "flex flex-col items-center capitalize p-2 text-xs",
    {'bg-gray-200 pointer-events-none' : props.navItem.page === currentPage.value}
])
</script>

<template>
    <li class="w-full">
        <a :class="classes" :href="`#${navItem.page}`" @click="navigate(navItem.page)">
            <BaseIcon :name="navItem.icon" class="h-6 w-6">
                {{ navItem.page }}
            </BaseIcon>
        </a>
    </li>
</template>

<style scoped>

</style>