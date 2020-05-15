const PostsComponent = () => import('../../components/posts/posts.component.vue');

export default {
  namespaced: true,
  state: {
    activeTab: 0,
    tabs: [
      {
        name: "Personal",
        component: PostsComponent,
        type: 'personal'
      },
      {
        name: "Hot",
        component: PostsComponent,
        type: 'hot'
      },
      {
        name: "Latest",
        component: PostsComponent,
        type: 'latest'
      },
    ],
  },

  mutations: {
    SET_ACTIVE_TAB (state, value) {
      state.activeTab = value
    },
  },

  getters: {
    activeTab: (state) => state.activeTab,
    tabs: (state) => state.tabs,
    getRenderComponent: (state) => {
      const { component, type } = state['tabs'][state.activeTab];
      return { component, type }
    }
  }
}
