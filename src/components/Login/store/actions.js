import authApi from '@/api/baseApi'

// export const myAction = async ({ commit }) => {


// }

export const singInUser = async ({ commit }, user ) => {

    const { email, password } = user

    try {
        const { data } = await authApi.post('/auth', { email, password })
        const idToken = data[0]
        console.log(data);
        
        commit('loginUser', { idToken })

        return { ok: true }

    } catch (error) {
        console.log(error);
        return { ok: false, message: error.response.data.errors[0] }
    }

}


export const checkAuthentication = async ({ commit }) => {

    const idToken      = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if( !idToken ) {
        commit('logout')
        return { ok: false, message: 'No hay token' }
    }

    try {
        
        const { data } = await authApi.post(':lookup', { idToken })
        // console.log(data)
        const { displayName, email } = data.users[0]

        const user = {
            name: displayName,
            email
        }

        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }

    } catch (error) {
        commit('logout')
        return { ok: false, message: error.response.data.error.message }
    }

}
