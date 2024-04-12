import baseApi from '@/api/baseApi';
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'


const useAuth = () => {
    
    const store = useStore()
    let purchases = ref([]);

    onMounted(() => {
        purchases = await baseApi.get 
    }),
    
    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logout,

        authStatus: computed(()=> store.getters['auth/currentState']),
        username: computed(()=> store.getters['auth/username'])
    }
}

export default useAuth