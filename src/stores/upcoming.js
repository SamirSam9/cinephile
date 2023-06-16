import { apiKey } from "@/static";
import { defineStore } from "pinia";
import axios from "axios";

export const useUpcoming = defineStore({
    id: 'upcoming',
    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/upcoming/',
        upcoming: null        
    }),
    actions:{
        async getUpcoming() {
            try{
                const res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU&page=1`)
                const data = res.data.results
                const arrayWithPhoto = data.filter(movie=> movie.backdrop_path != null)
                
                this.upcoming = arrayWithPhoto
                
            }catch(error){
                console.log(error);
            }
        }
    }
})
