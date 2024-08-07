import {BUTTON_TYPES, NAV_ITEMS} from "@/constans.js";
import {HOURS_IN_DAY, MIDNIGHT_HOUR} from "@/constans.js";
import {ICONS} from "@/icons.js";

const isSelectOptionValid = ({value, label}) => (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
const isBetween = (value, start, end) => value >= start && value <= end
const isUndefined = (value) => value === undefined
const isString = (value) => typeof value === 'string'

export const isNotEmptyString = (value) => isString(value) && value.length > 0
export const isPageValid = (page) => NAV_ITEMS.some(navItem => navItem.page === page)
export const isIconValid = (icon) => Object.keys(ICONS).includes(icon)
export const isNavItemValid = (navItem) => NAV_ITEMS.includes(navItem)
export const isButtonTypeValid = (buttonType) => BUTTON_TYPES.includes(buttonType)
export const isTimelineItemValid = ({hour}) => isHourValid(hour)
export const isHourValid = (hour) => isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
export const validateSelectOptions = (options) => options.every(isSelectOptionValid)
export const validateTimelineItems = (timelineItems) => timelineItems.every(isTimelineItemValid)
export const isUndefinedOrNull = (value) => isUndefined(value) || isNull(value)
export const isSelectValueValid = (value) => isNotEmptyString(value) || isNumberOrNull(value)
export const isNumberOrNull = (value) => isNumber(value) || isNull(value)
export const validateActivities = (activities) => activities.every(isActivityValid)
export const isNull = (value) => value === null
export const isNumber = (value) => typeof value === 'number'
export const isActivityValid = ({id, name, secondsToComplete}) => {
    if (isNull(id)) {
        return true
    }

    return [
        isNotEmptyString(id),
        isNotEmptyString(name),
        isNumber(secondsToComplete),
    ].every(Boolean)
}



