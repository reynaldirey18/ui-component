<template>
  <h3 class="text-2xl font-semibold mb-2 mt-5">AppBar</h3>
  <div class="space-y-2">
    <v-app-bar> <span class="font-semibold"> GITS UI </span> </v-app-bar>
    <v-app-bar color="primary">
      <span class="font-semibold"> GITS UI </span>
    </v-app-bar>
    <v-app-bar color="secondary">
      <span class="font-semibold"> GITS UI </span>
    </v-app-bar>
    <v-app-bar color="info">
      <span class="font-semibold"> GITS UI </span>
    </v-app-bar>
    <v-app-bar color="warning">
      <span class="font-semibold"> GITS UI </span>
    </v-app-bar>
    <v-app-bar color="success">
      <span class="font-semibold"> GITS UI </span>
    </v-app-bar>
    <v-app-bar color="error">
      <span class="font-semibold"> GITS UI </span>
    </v-app-bar>
    <v-app-bar color="indigo">
      <span class="font-semibold"> Custom AppBar with CSS Variables </span>
    </v-app-bar>
  </div>
</template>

<style scoped>
.app-bar-indigo {
  --app-bar-bg-color: theme("colors.indigo.600");
  --app-bar-color: theme("colors.white");
}
</style>
