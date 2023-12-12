import {defineStore} from "pinia";

export const useCounterStore = defineStore('counters', () => {
    const posts = ref([])


    // const getPosts =  async function() {
    //     await fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => new DOMParser().parseFromString(response, "text/xml"))
    //         .then(data => {
    //             posts.value = data
    //             console.log('Data is fetched.')
    //         })
    // }
    // getPosts().then()

    return {
        posts,
        getPosts
    }
})
