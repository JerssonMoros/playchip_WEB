import baseApi from '@/api/baseApi'

// export const myAction = async ({ commit }) => {


// }

export const singInUser = async ({ commit }, user ) => {

    const { email, password } = user

    try {
        const { data: { data } } = await baseApi.post('/auth', { email, password });
        const { token, user } = data

        commit('loginUser', { token, user })

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
        
        const { data: { data } } = await baseApi.post('/auth/refresh', null, {
            headers: {
              'x-token': idToken
            }
          });

        const { token, user } = data

        commit('loginUser', { token, user })

        return { ok: true, token }

    } catch (error) {
        commit('logout')
        return { ok: false, message: error.response }
    }

}
