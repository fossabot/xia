<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <h2 class="pt-3">Internal Error</h2>
      <p>Reason: {{ getErrorReason }}</p>
      <router-link to="/">Go to Index</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ["reason"],
  computed: {
    getErrorReason() {
      if (this.reason) {
        return this.reason;
      }
      return "Unknown";
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  height: 150px;
  width: auto;
  background: #ffffff;
}
</style>
