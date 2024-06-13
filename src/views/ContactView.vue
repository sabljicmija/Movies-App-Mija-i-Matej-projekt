<template>
  <div class="about">
    <div class="contact-header">
      <h1>Contact</h1>
      <h2>Mija Sabljić | Matej Kraljević</h2>
      <p>If you have any questions or would like to get in touch, please fill out the form below.</p>
    </div>
    <div class="contactForm">
      <v-text-field label="Ime" v-model="name" outlined></v-text-field>
      <v-text-field label="Email" v-model="email" outlined></v-text-field>
      <v-textarea label="Poruka" v-model="instructions" outlined></v-textarea>
      <v-btn color="primary" elevation="2" mx="4" @click="showMessage()">Pošalji</v-btn>
      <v-alert class="message" type="success" v-if="showSuccess">Success! Your message has been sent.</v-alert>
      <v-alert class="message" type="error" v-if="showError">Potrebno je sve popuniti.</v-alert>
    </div>
    <div class="contact-footer">
      <p>You can also reach us directly at: <br><br>
        <a href="mailto:mija.sabljic@fpmoz.sum.ba">mija.sabljic@fpmoz.sum.ba</a></p>
      <p><a href="mailto:matej.kraljevic@fpmoz.sum.ba">matej.kraljevic@fpmoz.sum.ba</a></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showError: false,
      showSuccess: false,
      name: "",
      email: "",
      instructions: "",
    };
  },
  methods: {
    showMessage() {
      if (this.name && this.email && this.instructions) {
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 2000);
      } else {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 2000);
      }
    },
  },
};
</script>
<style scoped>
.about {
  padding: 3rem 2rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.contact-header h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contactForm {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 1px 4px 25px 5px rgba(0, 0, 0, 0.1);
}

.contact-footer {
  text-align: center;
  margin-top: 3rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
}

a {
  color: #1976d2;
  text-decoration: none;
  font-weight: 600;
}

a:hover {
  text-decoration: underline;
}
</style>