export default {
    state: {
        title: 'This is statistic page.'
    },
    getters: {
        getStatisticTitle(state, getters, rootState) {
            return state.title
        }
    }
}
