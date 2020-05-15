<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <div
        class="profile-image"
        :style="`background-image: url(${profileImage})`"
      ></div>
    </ion-buttons>
    <ion-title class="ion-text-center">
        <img :src="logo" height="30px" />
    </ion-title>
    <ion-buttons slot="secondary">
      <ion-button>
        <i class="lni lni-search search-btn"></i>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>

<script>
export default {
  name: "NormalHeaderComponent",
  data() {
    return {
      profileImage: "/images/original.jpeg",
      logo: "/images/logo.png",
    };
  },
};
</script>

<style lang="sass" scoped>
.profile-image
    width: 35px
    height: 35px
    border-radius: 100%
    overflow: hidden
    background-size: cover
    background-position: center
    margin: 10px
.search-btn
    margin: 10px
ion-title
    padding-top: 6px
</style>
