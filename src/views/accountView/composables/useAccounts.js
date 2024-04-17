import baseApi from '@/api/baseApi';
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'


const useAccounts = () => {
    
    const store = useStore()
    let accounts = ref([]);
    const msgError = ref()
    onMounted( async () => {
        const idToken = localStorage.getItem('idToken')

        try {
            const { data: { accounts: info } } = await baseApi.get('accounts', 
            {
                headers: {
                    'x-token': idToken
                }
            }
            
            )
    
            accounts.value = info
            
        } catch (error) {
            console.log(error);
            msgError.value = error.response.data.message
        }
    })


    console.log(accounts.value);
    
    return {
        accounts
    }
}

export default useAccounts