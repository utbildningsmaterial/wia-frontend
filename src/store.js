import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [
      {        
        id: 1,
        name: 'Lasse-Stefanz',
        where: {
            venue: 'Globen',
            adress: 'Den stora vita bollen'
        },
        when: {
            date: '22 mar',
            from: '18.00',
            to: '22:00'
        },
        info: 'Sittplats',
        price: 399
    },
    {
      id: 2,
      name: 'Kenta med micken',
      where: {
          venue: 'Jans vardagsrum',
          adress: 'Gräsvägen, 4 Borås'
      },
      when: {
          date: '29 mar',
          from: '23.00',
          to: '23:10'
      },
      info: 'endast ståplatser',
      price: 19
  }
    ],
    tickets: [
      {
          name: 'Lasse-Stefanz',
          code: 'AE32F',
          where: {
              venue: 'Globen',
              adress: 'Den stora vita bollen'
          },
          when: {
              date: '22 mar',
              from: '18.00',
              to: '22:00'
          },
          info: 'Sittplats'
      },
      {
          name: 'Lasse-Stefanz',
          code: 'AE32F',
          where: {
              venue: 'Globen',
              adress: 'Den stora vita bollen'
          },
          when: {
              date: '22 mar',
              from: '18.00',
              to: '22:00'
          },
          info: 'Sittplats'
      },
      {
          name: 'Lasse-Stefanz',
          code: 'AE32F',
          where: {
              venue: 'Globen',
              adress: 'Den stora vita bollen'
          },
          when: {
              date: '22 mar',
              from: '18.00',
              to: '22:00'
          },
          info: 'Sittplats'
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
