export const state = () => ({
    userListShow :false
})

export const actions = {
    
}
export const mutations = {
    toggleUserList(state, payload) {
        state.userListShow = payload
    }
}