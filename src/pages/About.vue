<template>
  <div class="ion-page">
    <ion-content class="ion-padding">
      <h1>About page</h1>
      <img alt="Vue logo" src="../assets/logo.png">
      <br />
      <ion-button v-on:click="navigator()" color="primary">Back</ion-button>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "about",
  methods: {
    navigator() {
      this.$router.go(-1)
    }
  }
};
</script>