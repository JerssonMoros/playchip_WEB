import authApi from '@/api/baseApi'
import { onMounted, ref } from 'vue'

const useNews = () => {
    const news = ref()
    const getNews = async () => {
        try {
            const { data } = await authApi.get("/news")
            news.value = data.news

        } catch (error) {
            console.log(error);
        }
    }
    onMounted(() => {
        getNews();    
    })

    return {
        news,
        getNews
    }
}

export default useNews