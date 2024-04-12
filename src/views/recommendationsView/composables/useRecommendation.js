import baseApi from '@/api/baseApi'
import { onMounted, ref } from 'vue'

const useRecommendation = () => {
    const recommendations = ref()
    const getRecommendations = async () => {
        try {
            const { data } = await baseApi.get("/recommendations")
            recommendations.value = data.recommendations

        } catch (error) {
            console.log(error);
        }
    }
    onMounted(() => {
        getRecommendations();    
    })

    return {
        recommendations,
        getRecommendations
    }
}

export default useRecommendation