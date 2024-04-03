import axios from 'axios'
import { onMounted, ref } from 'vue'

const useRecommendation = () => {
    const recommendations = ref()
    const getRecommendations = async () => {
        try {
            const { data } = await axios.get(`http://192.168.0.10:3005/api/recommendations`)
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