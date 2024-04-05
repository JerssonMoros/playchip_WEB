import { computed, ref } from 'vue'
import { useStore } from 'vuex'


const useAuth = () => {
    
    const store = useStore()

    const loginUser = async( user ) => {
        const resp = await store.dispatch('login/signInUser', user )
        return {ok: true}
        // return resp
    }

    const checkAuthStatus = async() => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }
    
    const logout = () => {
        store.commit('auth/logout')
        store.commit('journal/clearEntries')
    }
    
    return {
        checkAuthStatus,
        loginUser,
        logout,
        msgError: ref(),

        credentials: ref({
            email: "jersson0423@gmail.com",
            password: "AdminUser"
          }),

        authStatus: computed(()=> store.getters['auth/currentState']),
        username: computed(()=> store.getters['auth/username'])
    }
}

export default useAuth