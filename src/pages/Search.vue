<template>
  <div class="ion-page">
    Search page
    <ion-content class="ion-padding">
      <ion-button v-on:click="navigator()" color="primary">Back</ion-button>
      <br />
      <ion-button v-on:click="openCamera()" color="primary">Open camera</ion-button>
      <br />
      <ion-button v-on:click="openMedia()" color="primary">Open media</ion-button>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "search",
  methods: {
    openMedia() {

    },
    openCamera() {

    },
    navigator() {
      this.$router.go(-1)
    }
  }
};
</script>