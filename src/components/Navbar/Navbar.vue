<template>
    <header class="header">
        <nav class="nav">
            <div class="container">
                <div class="nav__wrap">
                    <router-link to="/" class="logo">
                        <img src="@/assets/images/Logo.svg" alt="">
                    </router-link>
                    <button class="nav__btn" @click="burgerOn">
                        <img src="@/assets/images/menu.svg" alt="">
                    </button>
                    <ul class="nav__list" :class="{active: burger}">
                        <li class="nav__close" @click="burgrerOff">
                            <img src="@/assets/images/closeMenu.svg" alt="">
                        </li>
                        <li v-for="link in links" :key="link.title" @click="burgerOff">
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

const burger = ref(false)


const burgerOn = ()=>{
    burger.value = true
    document.body.style.overflow = 'hidden'
}
const burgerOff = ()=>{
    burger.value = false
    document.body.style.overflow = 'visible'
}


</script>

<style lang="scss" scoped></style>