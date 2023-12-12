<template>
  <header>
    <div class="container header__container">
      <div class="header__wrap">
        <h1>Список новостей</h1>
        <button>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.29973 0.0524773C10.3583 -0.0731896 11.3802 0.0315329 12.3247 0.316378C15.4638 1.26307 17.7722 4.233 17.8129 7.75586H19.8649C19.9789 7.75586 20.04 7.90247 19.9708 7.99882L16.8684 12.3427C16.8155 12.4139 16.7096 12.4139 16.6607 12.3427L13.5584 8.00301C13.4892 7.90247 13.5502 7.76005 13.6642 7.76005H15.7121C15.6755 5.44359 14.2871 3.46643 12.3247 2.61608C11.5838 2.29354 10.7654 2.13017 9.90636 2.17625C8.72566 2.23908 7.63861 2.69567 6.7592 3.41616C6.29099 3.80154 5.607 3.70939 5.25279 3.21091C4.91487 2.73756 5.00851 2.07572 5.45636 1.71128C6.53934 0.819046 7.85846 0.224222 9.29973 0.0524773ZM13.2408 12.594C12.3655 13.3187 11.2743 13.7753 10.0936 13.834C9.23051 13.88 8.41217 13.7125 7.67525 13.3941C5.71285 12.5438 4.32045 10.5666 4.28788 8.25015H6.33577C6.44977 8.25015 6.51084 8.10354 6.44163 8.0072L3.33925 3.66331C3.28632 3.5921 3.18047 3.5921 3.13161 3.66331L0.0292317 8.00301C-0.0399815 8.10354 0.0210892 8.24596 0.135087 8.24596H2.18705C2.2237 11.7688 4.53216 14.7429 7.67525 15.6854C8.61981 15.9703 9.64172 16.0708 10.7003 15.9493C12.1415 15.7818 13.4607 15.187 14.5436 14.2947C14.9915 13.9261 15.0851 13.2685 14.7472 12.7951C14.393 12.3008 13.709 12.2087 13.2408 12.594Z"
                fill="#0029FF"/>
          </svg>
        </button>
      </div>
      <form>
        <input type="text">
        <button>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.48485 1.81818C4.80295 1.81818 1.81818 4.80295 1.81818 8.48485C1.81818 12.1667 4.80295 15.1515 8.48485 15.1515C10.2942 15.1515 11.9352 14.4307 13.1363 13.2606C13.1548 13.2382 13.1745 13.2165 13.1955 13.1956C13.2165 13.1746 13.2382 13.1549 13.2606 13.1364C14.4307 11.9352 15.1515 10.2942 15.1515 8.48485C15.1515 4.80295 12.1667 1.81818 8.48485 1.81818ZM15.093 13.8074C16.2669 12.3518 16.9697 10.5004 16.9697 8.48485C16.9697 3.7988 13.1709 0 8.48485 0C3.7988 0 0 3.7988 0 8.48485C0 13.1709 3.7988 16.9697 8.48485 16.9697C10.5004 16.9697 12.3518 16.2669 13.8074 15.0931L18.448 19.7337C18.803 20.0888 19.3786 20.0888 19.7337 19.7337C20.0887 19.3787 20.0887 18.8031 19.7337 18.4481L15.093 13.8074Z"
                  fill="#DCDCDC"/>
          </svg>
        </button>
      </form>
    </div>
    <div class="container">
      <nav class="nav">
        <ul class="nav__list">
          <li>
            <button class="active">Все</button>
          </li>
          <li>
            <button>Lenta.ru</button>
          </li>
          <li>
            <button>Mos.ru</button>
          </li>
        </ul>
      </nav>
      <div class="nav__btns">
        <p>
          <input type="radio" value="0" id="test1" name="radio-group" v-model.number="tr">
          <label for="test1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="18" height="8" fill="currentColor"/>
              <rect y="10" width="18" height="8" fill="currentColor"/>
            </svg>
          </label>
        </p>
        <p>
          <input type="radio" value="1" id="test2" name="radio-group" v-model.number="tr">
          <label for="test2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="8" height="8" fill="currentColor"/>
              <rect y="10" width="8" height="8" fill="currentColor"/>
              <rect x="10" width="8" height="8" fill="currentColor"/>
              <rect x="10" y="10" width="8" height="8" fill="currentColor"/>
            </svg>
          </label>
        </p>
      </div>
    </div>
  </header>
  <main>
    <section class="news">
      <div class="container">
        <ul class="news__list" :class="[tr === '1' ? 'grid' : '']">
          <li class="news__item" v-for="item in news">
            <div class="news__image">
              <img
                  :src="`${
                item.getElementsByTagName('enclosure')[0].getAttribute('url') ?
                item.getElementsByTagName('enclosure')[0].getAttribute('url') :
                ''}`"
                  alt="">
            </div>
            <div class="news__text">
              <h3>
                <a href="">
                  {{
                    item.getElementsByTagName('title')[0] ?
                        item.getElementsByTagName('title')[0].textContent :
                        ''
                  }}
                </a>
              </h3>
              <p>
                {{
                  item.getElementsByTagName('description')[0] ?
                      item.getElementsByTagName('description')[0].textContent :
                      ''
                }}
              </p>
            </div>
            <div class="news__src">
              <a target="_blank" href="https://www.mos.ru/rss">
                mos.ru
              </a>
            </div>
            <div class="news__date">
              {{
                item.getElementsByTagName('pubDate')[0] ?
                    `${new Date(item.getElementsByTagName('pubDate')[0].textContent).getDate()}.${new Date(item.getElementsByTagName('pubDate')[0].textContent).getMonth()}.${new Date(item.getElementsByTagName('pubDate')[0].textContent).getFullYear()}`
                    :
                    ''
              }}
            </div>
          </li>
          <li class="news__item" v-for="item in newsLenta">
            <div class="news__image">
              <img
                  :src="`${
                item.getElementsByTagName('enclosure')[0].getAttribute('url') ?
                item.getElementsByTagName('enclosure')[0].getAttribute('url') :
                ''}`"
                  alt="">
            </div>
            <div class="news__text">
              <h3>
                <a href="">
                  {{
                    item.getElementsByTagName('title')[0] ?
                        item.getElementsByTagName('title')[0].textContent :
                        ''
                  }}
                </a>
              </h3>
              <p>
                {{
                  item.getElementsByTagName('description')[0] ?
                      item.getElementsByTagName('description')[0].textContent :
                      ''
                }}
              </p>
            </div>
            <div class="news__src">
              <a target="_blank" href="https://lenta.ru/">
                lenta.ru
              </a>
            </div>
            <div class="news__date">
              {{
                item.getElementsByTagName('pubDate')[0] ?
                    `${new Date(item.getElementsByTagName('pubDate')[0].textContent).getDate()}.${new Date(item.getElementsByTagName('pubDate')[0].textContent).getMonth()}.${new Date(item.getElementsByTagName('pubDate')[0].textContent).getFullYear()}`
                    :
                    ''
              }}
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="pagination">
      <div class="container">
        <ul class="pagination__list">
          <li class="pagination__item">
            <a class="pagination__link active" href="#">1</a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">2</a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">...</a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">10</a>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
import {DOMParser} from "xmldom";

const tr = ref(0);
const url = 'https://www.mos.ru/rss';

async function getNews() {
  const {data: lenta} = await useFetch('/api/hello2');
  const docLenta = new DOMParser().parseFromString(lenta.value.string, 'text/xml');
  const newsLenta = Array.from(docLenta.getElementsByTagName('item'));
}

console.log(getNews())

const {data: mos} = await useFetch('/api/hello');
const doc = new DOMParser().parseFromString(mos.value.string, 'text/xml');
const news = Array.from(doc.getElementsByTagName('item'));

onMounted(() => {

})
computed(() => {

})


</script>
<style>
.container {
}
</style>