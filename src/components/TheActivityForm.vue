<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue"
import BaseIcon from "@/components/BaseIcon.vue"
import {id} from '@/functions'
import {nextTick, ref} from "vue"
import {createActivity} from "@/activities"
import {ICON_PLUS} from "@/icons"

let name = ref('')

const submit = async () => {
    createActivity({
        id: id(),
        name: name.value,
        secondToComplete: 0
    })
    name.value = ''
    await nextTick()
    window.scrollTo(0, document.body.scrollHeight)
}
</script>

<template>
    <form class="sticky bottom-[57] flex gap-2 border-t bg-white p-4" action="" @submit.prevent="submit">
        <input
            class="w-full rounded border px-4 text-xl"
            type="text" placeholder="Activity name"
            v-model="name"
        />
        <BaseButton :disabled="name.trim() === ''">
            <BaseIcon :name="ICON_PLUS"/>
        </BaseButton>
    </form>
</template>

<style scoped>

</style>