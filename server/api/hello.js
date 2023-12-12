export default defineEventHandler(async(event) => {
    const response = await fetch('https://www.mos.ru/rss')
    const string = await response.text()
    return {
        string
    }
})