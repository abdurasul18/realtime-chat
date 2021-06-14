function monthFormat(val) {
    let date = new Date(val)
    if (date.getMonth() + 1 < 10) return date.getDate() + '/' + '0' + `${date.getMonth()+1}` + '/' + date.getFullYear()
    return date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear()
}

function timeFormat(val) {
    let time = new Date(val)
    if (time.getMinutes() < 10) return `${time.getHours()}:0${time.getMinutes()}`
    return `${time.getHours()}:${time.getMinutes()}`
}
export { monthFormat, timeFormat }