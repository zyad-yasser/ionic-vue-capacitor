<template>
  <div class="ion-page">
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from '@/components/home/home.component'
export default {
  name: "home",
  components: {
    HomeComponent
  },
  methods: {
    navigator() {
      this.$router.push({
        name: 'Photos',
        replace: true
      })
    }
  }
};
</script>