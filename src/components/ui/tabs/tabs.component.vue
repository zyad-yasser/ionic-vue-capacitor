<template>
  <div>
    <div class="tabs-area">
      <div
        class="liner"
        :style="'left:' + (activeTab / tabs.length) * 100 + '%'"
      />
      <div class="tabs-content">
        <div
          v-for="(tab, index) of tabs"
          :key="index"
          :class="'tab' + (index === activeTab ? ' active' : '')"
          @click="setActiveTab(index)"
        >
          {{ tab.name }}
        </div>
      </div>
    </div>
    <div class="render-area">
      <component :is="renderComponent.component" :type="renderComponent.type"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsComponent",
  props: {
    tabs: Array,
    activeTab: Number,
    storeModule: String
  },
  computed: {
    renderComponent() { return this.$store.getters[`${this.storeModule}/getRenderComponent`] }
  },
  methods: {
    setActiveTab(index) {
      this.$store.commit(`${this.storeModule}/SET_ACTIVE_TAB`, index, { root: true });
    },
  },
};
</script>

<style lang="sass" scoped>
.render-area
  height: calc(100vh - 140px)
  overflow-y: scroll
.tabs-area
    margin-top: 5px
    width: calc(100% - 30px)
    margin: 0 15px
    box-sizing: border-box
    height: 44px
    position: relative
    .liner
        width: 33%
        height: 2px
        border-radius: 100px
        position: absolute
        background-color: var(--main-color)
        bottom: 0px
        transition: 300ms all ease
    .tabs-content
        display: flex
        box-sizing: border-box
        height: 44px
        flex-direction: row
        .tab
            transition: 300ms all ease
            font-size: 15px
            height: 100%
            flex: 0.33
            display: flex
            align-items: center
            justify-content: center
            text-align: center
            color: #999
            &.active
                transition: 300ms all ease
                color: var(--main-color)
                font-weight: bold
</style>
