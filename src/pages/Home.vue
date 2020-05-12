<template>
  <div class="ion-page">
    <ion-content class="ion-padding ion-text-center">
      <h1>Welcome To @ionic/vue 8</h1>
      <!-- <i class="lni lni-close"></i> -->
      <img alt="Vue logo" src="../assets/logo.png">
      <br />
      <router-link to="/about">
        <ion-button color="primary">About</ion-button>
      </router-link>
      <br />
      <ion-button v-on:click="navigator()" color="primary">Go to photos page</ion-button>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "home",
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