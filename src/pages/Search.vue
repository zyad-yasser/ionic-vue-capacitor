<template>
  <div class="ion-page">
    Search page
    <ion-content class="ion-padding">
      <img width="100%" :src="image" >
      <br>
      <input type="file" ref="filePicker" accept="image/*" @change="onFileChoose($event)"/>
      <br>
      <ion-button v-on:click="navigator()" color="primary">Back</ion-button>
      <br />
      <ion-button v-on:click="openCamera()" color="primary">Open camera</ion-button>
      <br />
      <ion-button v-on:click="openMedia()" color="primary">Open media</ion-button>
    </ion-content>
  </div>
</template>

<script>
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
export default {
  name: "search",
  data() {
    return {
      image: '',
    }
  },
  methods: {
    onFileChoose(event) {
      const file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = () => {
        var output = document.getElementById('output');
        this.image = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    },
    openMedia() {
      this.$refs['filePicker'].click();
    },
    async openCamera() {
      const image = await Plugins.Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
      this.image = image.dataUrl;
      console.log(this.image)
    },
    navigator() {
      this.$router.go(-1)
    }
  }
};
</script>