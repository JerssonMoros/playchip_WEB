import authApi from '@/api/baseApi'

// export const myAction = async ({ commit }) => {


// }

export const singInUser = async ({ commit }, user ) => {

    const { email, password } = user

    try {
        const { data: { data } } = await authApi.post('/auth', { email, password });
        const { token, user } = data

        commit('loginUser', { token, user })

        return { ok: true }

    } catch (error) {
        console.log(error);
        return { ok: false, message: error.response.data.errors[0] }
    }

}


export const checkAuthentication = async ({ commit }) => {

    try {
        
        const { data: { data } } = await authApi.get('/auth/refresh',  { withCredentials: true})

        const { token, user } = data

        commit('loginUser', { token, user })

        return { ok: true, token }

    } catch (error) {
        // commit('logout')
        return { ok: false, message: error.response }
    }

}
