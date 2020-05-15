<template>
    <TabsComponent :tabs="tabs" :activeTab="activeTab" storeModule="home" />
</template>

<script>
import TabsComponent from '@/components/ui/tabs/tabs.component';
export default {
    name: 'HomeComponent',
    components: {
        TabsComponent
    },
    computed: {
        tabs() { return this.$store.getters['home/tabs'] },
        activeTab() { return this.$store.getters['home/activeTab'] }
    }
}
</script>

<style lang="sass" scoped>
</style>