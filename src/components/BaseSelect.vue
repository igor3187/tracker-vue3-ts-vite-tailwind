<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue"
import BaseIcon from "@/components/BaseIcon.vue"
import {validateSelectOptions, isUndefinedOrNull, isSelectValueValid} from '@/validators'
import {normalizeSelectValue} from '@/functions'
import {computed} from "vue";
import { BUTTON_TYPE_NEUTRAL } from "@/constans";
import { ICON_X_MARK } from "@/icons";

const props = defineProps({
    options: {
        type: Array,
        required: true,
        validator: validateSelectOptions,
    },
    placeholder: {
        type: String,
        required: false,
        default: 'Rest'
    },
    selected: {
        type: [String, Number],
        required: false,
    }
})

const emit = defineEmits({
    select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
const select = (value) => emit('select', normalizeSelectValue(value))
</script>

<template>
    <div class="flex gap-2">
        <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
            <BaseIcon :name="ICON_X_MARK" />
        </BaseButton>
        <select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl" @change="select($event.target.value)">
            <option :selected="isNotSelected" disabled value="">{{placeholder}}</option>
            <option v-for="{value, label} in options" :key="value" :value="value" :selected="value === selected">
                {{label}}
            </option>
        </select>
    </div>
</template>

<style scoped>

</style>