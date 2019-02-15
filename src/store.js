import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    event: {},
    events: [],
    tickets: []
  },
  mutations: {
    selectEvent(state, event){
        state.event = event;
    },
    setEvents(state, events){
        state.events = events;
    }
  },
  actions: {
    async getEvents(ctx){

        let events = await axios.get('http://localhost:3000/events');
        ctx.commit('setEvents', events.data);

    }
  }
})
