<template>
    <header>
      <img :src="profilePic" alt="Foto de perfil" />
      <h1>{{ name }}</h1>
    </header>
</template>
  
<script>
  export default {
    name: 'Header',
    data() {
      return {
        name: 'Matheus Nunes Silva',
        profilePic: '../assets/perfil.jpg',
      }
    }
  }
</script>
  
<style scoped>
  header {
    text-align: center;
  }
  img {
    width: 100px;
    border-radius: 50%;
  }
</style>
  