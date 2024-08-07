import {ref} from "vue";
import {isPageValid} from "@/validators.js"
import TheProgress from "@/pages/TheProgress.vue"
import TheActivities from "@/pages/TheActivities.vue"
import TheTimeLine from "@/pages/TheTimeline.vue"
import {PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from '@/constans'

export const routes = {
    [PAGE_TIMELINE]: TheTimeLine,
    [PAGE_ACTIVITIES]: TheActivities,
    [PAGE_PROGRESS]: TheProgress,
}

export const normalizeCurrentHash = () => {
    let page = window.location.hash.slice(1)

    if (isPageValid(page)) {
        return page
    }

    window.location.hash = PAGE_TIMELINE

    return PAGE_TIMELINE
}

export const currentPage = ref(normalizeCurrentHash())

export const navigate = (page) => {
    document.body.scrollIntoView()

    // if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    //     timelineRef.value.scrollToHour()
    // } else if (page !== PAGE_TIMELINE) {
    // }

    currentPage.value = page
}
