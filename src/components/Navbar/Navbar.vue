<template>
    <header class="header">
        <nav class="nav">
            <div class="container">
                <div class="nav__wrap">
                    <router-link to="/" class="logo">
                        <img src="@/assets/images/Logo.svg" alt="">
                    </router-link>
                    <ul class="nav__list">
                        <li v-for="link in links" :key="link.title">
                            <router-link :to="link.url" class="nav__link">{{ link.title }}</router-link>
                        </li>
                        <li>
                            <router-link to="/search" class="nav__link">
                                <img src="@/assets/images/search.svg" alt="">
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from "vue";
const links = ref([
    { title: 'Главная', url: '/' },
    { title: 'Фильмы', url: '/movie' },
    { title: 'Сериалы', url: '/Tv' },
])

</script>

<style lang="scss" scoped></style>