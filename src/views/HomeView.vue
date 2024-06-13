<template>
  <div class="homepage">
    <div class="header-section">
      <h1>Welcome to MOVIE APP</h1>
      <h2>Informatički projekt 2</h2>
      <p> Made by: Mija Sabljić i Matej Kraljević</p>
      <p>Discover a world of movies and get inspired!</p>
      <v-btn color="primary" @click="goToMovies" class="cta-btn">Explore Movies</v-btn>
    </div>
    <div class="footer-section">
      <p>IP2 <a href="https://fpmoz.sum.ba/" target="_blank">Informatika - FPMOZ </a></p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMovies() {
      this.$router.push('/movies');
    }
  }
};
</script>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.header-section {
  text-align: center;
  margin-bottom: 50px;
}

.header-section h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.header-section p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
}

.footer-section p {
  font-size: 0.9em;
  color: #888;
}

.footer-section a {
  color: #2196F3;
  text-decoration: none;
}

.footer-section a:hover {
  text-decoration: underline;
}
</style>
