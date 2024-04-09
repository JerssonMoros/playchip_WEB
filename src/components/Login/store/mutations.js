
// export const myAction = ( state ) => {

// }


export const loginUser = ( state, { token, user }) => {

    if ( token ) {
        state.token = token
    }

    state.user   = user
    state.status = 'authenticated'
}


export const logout = (state) => {
    
    state.user = null
    state.idToken = null
    state.refreshToken = null
    state.status = 'not-authenticated'

}
