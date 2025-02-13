<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <Sidebar @navigate="setCurrentSection" />
      <div class="content">
        <component :is="currentSection" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Bio from './views/Bio.vue'
import Contact from './views/Contact.vue'
import Experience from './views/Experience.vue'
import Projects from './views/Projects.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      currentSection: Bio, // Carrega a bio por padrão
    }
  },
  methods: {
    setCurrentSection(section) {
      this.currentSection = section;
    }
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
