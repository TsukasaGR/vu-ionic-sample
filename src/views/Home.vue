<template>
  <ion-app class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <img alt="Vue logo" src="../assets/logo.png" />
      <hr />
      <ion-button @click="onClick()" full>Go to About Page</ion-button>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    onClick() {
      this.$router.push('about')
    },
  },
})
</script>
