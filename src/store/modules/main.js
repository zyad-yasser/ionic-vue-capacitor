export default {
  namespaced: true,
  state: {
    activeTab: 0,
    tabs: [
      {
        routeName: 'Home',
        tabName: 'home',
        withBadge: true,
        icon: 'home'
      },
      {
        routeName: 'Search',
        tabName: 'search',
        withBadge: false,
        icon: 'search'
      },
      {
        routeName: null,
        tabName: 'create',
        withBadge: false,
        icon: null
      },
      {
        routeName: 'Notifications',
        tabName: 'notifications',
        withBadge: true,
        icon: 'alarm'
      },
      {
        routeName: 'Profile',
        tabName: 'profile',
        withBadge: false,
        icon: 'user'
      },
    ]
  },

  mutations: {
    SET_ACTIVE_TAB (state, value) {
      state.activeTab = value
    }
  },

  getters: {
    activeTab: (state) => state.activeTab
  }
}
