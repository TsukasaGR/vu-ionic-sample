<template>
  <ion-tabs>
    <ion-tab tab="/">
      <home />
    </ion-tab>
    <ion-tab tab="favorite">
      <favorite />
    </ion-tab>
    <ion-tab tab="settings">
      <settings />
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="/">
        <ion-label>Home</ion-label>
        <ion-icon name="home"></ion-icon>
        <ion-badge>6</ion-badge>
      </ion-tab-button>

      <ion-tab-button tab="favorite">
        <ion-label>Favorite</ion-label>
        <ion-icon name="heart"></ion-icon>
      </ion-tab-button>

      <ion-tab-button tab="settings">
        <ion-label>Settings</ion-label>
        <ion-icon name="settings"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script lang="ts">
import Vue from 'vue'
import Home from '@/views/Home.vue'
import Favorite from '@/views/Favorite.vue'
import Settings from '@/views/Settings.vue'

export default Vue.extend({
  components: { Home, Favorite, Settings },
})
</script>
