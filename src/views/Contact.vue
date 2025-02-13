<template>
    <section class="contact-container">
      <h2 class="title">Contato</h2>
  
      <form @submit.prevent="submitForm" class="contact-form">
        <label for="name">Nome:</label>
        <input v-model="form.name" type="text" id="name" required />
  
        <label for="email">Email:</label>
        <input v-model="form.email" type="email" id="email" required />
  
        <label for="message">Mensagem:</label>
        <textarea v-model="form.message" id="message" required></textarea>
  
        <button type="submit">Enviar</button>
      </form>
  
      <p v-if="submitted" class="success-message">Mensagem enviada com sucesso!</p>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: ""
        },
        submitted: false
      };
    },
    methods: {
      submitForm() {
        this.submitted = true;
        console.log("Mensagem enviada:", this.form);
        // Aqui você pode integrar com um backend ou serviço de email.
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
    font-weight: bold;
  }
  
  input, textarea {
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }
  
  textarea {
    resize: vertical;
    height: 100px;
  }
  
  button {
    margin-top: 15px;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background: #0056b3;
  }
  
  .success-message {
    margin-top: 10px;
    color: green;
    font-weight: bold;
  }
  </style>
  