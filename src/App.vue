<template>
  <ion-tabs
    @IonTabsWillChange="beforeTabChange"
    @IonTabsDidChange="afterTabChange"
  >
    <HeaderComponent />
    <transition name="slide-fade">
      <router-view />
    </transition>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar>
        <div class="plus-button ripple-parent">
          <ion-ripple-effect type="unbounded"></ion-ripple-effect>
          <i class="lni lni-pencil"></i>
        </div>

        <ion-tab-button
          @click="setActiveTab(index)"
          v-for="(tab, index) of tabs"
          :key="index"
          :tab="tab.tabName"
          :to="{ name: tab.routeName }"
          :class="!tab.routeName ? 'no-event': ''"
        >
          <i
            :class="
              'lni lni-' +
                tab.icon +
                ($store.getters['main/activeTab'] === index ? ' active' : '')
            "
          ></i>
          <ion-badge v-if="tab.withBadge">6</ion-badge>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(50%);
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Home from "./pages/Home";
import HeaderComponent from "./components/header/header.component";
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
const { PushNotifications } = Plugins;
export default {
  components: {
    HeaderComponent
  },
  methods: {
    setActiveTab(index) {
      console.log(index)
      this.$store.commit("main/SET_ACTIVE_TAB", index, { root: true });
    },
    afterTabChange() {},
    beforeTabChange() {},
    goToAboutTab() {},
    navigator() {
      this.$router.push("Home");
    },
  },
  data() {
    return {
      tabs: this.$store.state.main.tabs,
    };
  },
  mounted() {
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On succcess, we should be able to receive notifications
    PushNotifications.addListener("registration", (token) => {
      console.log(token);
      alert("Push registration success, token: " + token.value);
    });

    // Some issue with your setup and push will not work
    PushNotifications.addListener("registrationError", (error) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification) => {
        console.log(notification);
        // let notif = this.state.notifications;
        // notif.push({ id: notification.id, title: notification.title, body: notification.body })
        // this.setState({
        //   notifications: notif
        // })
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification) => {
        // let notif = this.state.notifications;
        // notif.push({ id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body })
        // this.setState({
        //   notifications: notif
        // })
      }
    );
  },
};
</script>
