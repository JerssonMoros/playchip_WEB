import authApi from '@/api/authApi'

// export const myAction = async ({ commit }) => {


// }

export const signInUser = async ({ commit }, user ) => {

    console.log(user, "Llego el usuario");
    // const { email, password } = user

    // try {
    //     console.log("Este es el usuario", user);
    //     const { data } = await authApi.post('/auth', { email, password })
    //     const idToken = data[0]
    //     console.log(data);
        
    //     commit('loginUser', { idToken })

    //     return { ok: true }

    // } catch (error) {
    //     return { ok: false, message: error.response.data.errors[0] }
    // }

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