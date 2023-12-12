export default defineEventHandler(async(event) => {
    const response = await fetch('https://lenta.ru/rss')
    const string = await response.text()
    return {
        string
    }
})