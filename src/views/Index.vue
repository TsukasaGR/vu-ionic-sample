<template>
  <div id="index">
    <ion-vue-router />
    <footer-nav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FooterNav from '@/components/FooterNav.vue'

export default Vue.extend({
  components: { FooterNav },
})
</script>
