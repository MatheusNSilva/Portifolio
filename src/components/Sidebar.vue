<template>
    <aside>
      <button @click="navigateTo(Bio)">Bio</button>
      <button @click="navigateTo(Experience)">Experiência</button>
      <button @click="navigateTo(Projects)">Projetos</button>
      <button @click="navigateTo(Contact)">Contato</button>
    </aside>
</template>
  
<script>
  import Bio from '../views/Bio.vue'
  import Experience from '../views/Experience.vue'
  import Projects from '../views/Projects.vue'
  import Contact from '../views/Contact.vue'
  
  export default {
    name: 'Sidebar',
    methods: {
      navigateTo(section) {
        this.$emit('navigate', section);
      }
    }
  }
</script>
  
<style scoped>
  aside {
    width: 200px;
    background-color: #f4f4f4;
    padding: 20px;
  }
  button {
    display: block;
    margin: 10px 0;
    width: 100%;
  }
</style>
  