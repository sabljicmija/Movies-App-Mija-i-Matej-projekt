<template>
  <div class="navbar">
    <v-toolbar app color="primary" dark>
      <v-img alt="Vuetify Logo" class="shrink mr-2" contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
      <v-toolbar-title class="white--text">MOVIE APP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link v-for="link in links" :key="link.name" :to="link.path" class="v-btn white--text nav-item">{{
          link.name }}</router-link>
      </v-toolbar-items>


    </v-toolbar>

    <v-navigation-drawer v-model="drawer" temporary absolute width="200" id="drawer">


      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in links" :key="item.name" :to="item.path" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Home ", path: "/" },
        { name: "Get a Movie ", path: "/movies" },
        { name: "Contact", path: "/contact" }
      ],
      drawer: false,
    };
  },
};
</script>

<style scoped>
.nav-btn {
  box-shadow: none;
}

.nav-item {
  margin-right: 20px;
}
</style>