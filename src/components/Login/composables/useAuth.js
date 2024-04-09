import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useAuth = () => {
    
    const store = useStore();
    

    const loginUser = async( user ) => {
        const resp = await store.dispatch( 'authModule/singInUser', user );
        console.log(resp);
        return resp
    }

    const checkAuthStatus = async() => {
        const resp = await store.dispatch('authModule/checkAuthentication')
        return resp
    }
    
    // const logout = () => {
    //     store.commit('auth/logout')
    //     store.commit('journal/clearEntries')
    // }
    
    return {
        checkAuthStatus,
        loginUser,
        // logout,
        msgError: ref(),

        credentials: ref({
            email: "jersson0423@gmail.com",
            password: "usuario"
          }),

        authStatus: computed(()=> store.getters['authModule/currentState']),
        username: computed(()=> store.getters['authModule/username'])
    }
}

export default useAuth
