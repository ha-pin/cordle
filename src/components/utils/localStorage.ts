// 本地持久化储存处理
export const setNew = () => {
    localStorage.setItem("cordle-new", "1")
}

export const getNew = () => {
    return localStorage.getItem("cordle-new")
}

export const setAns = (ans: [string, string, number][][]) => {
    if (ans.length > 0) {
        localStorage.setItem("cordle-ans", JSON.stringify(ans))
    }
}

export const getAns = (): [string, string, number][][] => {
    return JSON.parse(localStorage.getItem("cordle-ans") || "[]")
}

export const setIDX = (
    idx: number
) => {
    localStorage.setItem("cordle-idx", JSON.stringify(idx))
}

export const getIDX = (): number => {
    return JSON.parse(localStorage.getItem("cordle-idx") || "0")
}

export const setCurr = (current: [string, string, number][]) => {
    if (current.length > 0) {
        localStorage.setItem("cordle-current", JSON.stringify(current))
    }
}

export const getCurr = (): [string, string, number][] => {
    return JSON.parse(localStorage.getItem("cordle-current") || "[]")
}

export const getGOT = () => {
    if (localStorage.getItem("cordle-got") === null) {
        return false
    }

    return true
}

export const setGOT = () => {
    localStorage.setItem("cordle-got", "1")
}

export const getKeep = (): [Set<string>, Set<string>, Set<string>] => {
    const kept = localStorage.getItem("cordle-keep")
    if (kept !== null) {
        const data = JSON.parse(kept)
        return [new Set(data[0]), new Set(data[1]), new Set(data[2])]
    }

    return [new Set(), new Set(), new Set()]
}

export const setKeep = (except: Set<string>, included: Set<string>, right: Set<string>) => {
    localStorage.setItem("cordle-keep", JSON.stringify([[...except], [...included], [...right]]))
}

export const setGotTime = () => {
    localStorage.setItem("cordle-got-time", JSON.stringify(new Date().getTime()))
}

export const preDetectClear = () => {
    const gotTime = localStorage.getItem("cordle-got-time")
    if (gotTime === null) {
        return
    }

    const time = JSON.parse(gotTime)

    const today = new Date()
    const today_begin = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()
    const today_end = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).getTime()

    if (time > today_begin && time < today_end) {
        return
    }

    clearLocal()
}

/**
 * 清理本地数据
 */
export const clearLocal = () => {
    localStorage.clear()
    location.reload()
}
