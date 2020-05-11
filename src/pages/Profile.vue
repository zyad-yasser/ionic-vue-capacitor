<template>
  <div class="ion-page">
    Photos page
    <ion-content class="ion-padding">
      <ion-button v-on:click="navigator()" color="primary">Back</ion-button>
      <br />
      <ion-button v-on:click="loginFacebook()" color="primary">Login with Facebook</ion-button>
      <br />
      <ion-button v-on:click="loginTwitter()" color="primary">Login with Twitter</ion-button>
    </ion-content>
  </div>
</template>

<script>
import { Plugins } from '@capacitor/core';
import { FacebookLoginResponse } from '@rdlabo/capacitor-facebook-login';
import { Twitter } from 'capacitor-twitter';
const { FacebookLogin } = Plugins;

export default {
  name: "profile",
  methods: {
    async loginFacebook() {
      try {
        const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
        const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

        if (result.accessToken) {
          console.log(`Facebook access token is ${result.accessToken.token}`);
        } else {
          // Cancelled by user.
        } 
      } catch (error) {
        console.log(error);
      }
    },
    async loginTwitter() {
      try {
        const twitter = new Twitter();
        console.log(twitter)
        const res = await twitter.login();
      } catch (error) {
        console.log(error);
      }
    },
    navigator() {
      this.$router.go(-1)
    }
  }
};
</script>