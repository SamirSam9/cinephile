<template>
    <transition name="upcoming" mode="out-in">
    
    
    <div class="main__upcoming">
    <UpcomingItem
     v-for="(movie, idx) in getUpcomingArr" :key="movie.id" :movie="movie" :idx="idx"
    :next="getUpcomingArr[idx + 1 == getUpcomingArr.length ? 0 : idx + 1]"
    @slideNext="slideNext"
    :slideView="slideView" 
    />
    </div>
</transition>
</template>

<script setup>
import { useUpcoming } from "@/stores/upcoming";
import UpcomingItem from "./UpcomingItem.vue";
import { onMounted, ref, computed } from "vue";

let upcomingStore = useUpcoming()

const getUpcomingArr = computed(()=> upcomingStore.upcoming)

let slideView = ref(0)
let timeout = ref(null)

let slide = ()=> {
    if (getUpcomingArr.value.lenth - 1 == slideView.value) slideView.value = 0
    else slideView.value++
    timeout = setTimeout(slide, 5000)
}

const slideNext = ()=>{
    clearTimeout(timeout)
    slide()
}

onMounted(()=>{
    upcomingStore.getUpcoming()
    timeout = setTimeout(slide, 5000)
})
</script>

<style lang="scss" scoped>

</style>