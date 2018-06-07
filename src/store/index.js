import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    'baseInfo': {
        'token': 'haha',
        'accountId': '',
        'selectDate': ''
    }
}

const mutations = {
	getNewInfo(state, newInfo){
		Object.assign(state.baseInfo, newInfo);
	}
}

const actions = {
	
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})