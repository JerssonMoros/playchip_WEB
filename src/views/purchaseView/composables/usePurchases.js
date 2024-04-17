import baseApi from '@/api/baseApi';
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'


const usePurchases = () => {
    
    const store = useStore()
    let purchases = ref([]);

    onMounted( async () => {
        const idToken = localStorage.getItem('idToken')
        purchases = await baseApi.get('accounts', { headers: { 'x-token': idToken}})
    })
    
    return {
        purchases
    }
}

export default usePurchases