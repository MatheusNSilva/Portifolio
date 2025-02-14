<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <Sidebar @navigate="setCurrentSection" />
      <div class="content">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      currentSection: 'Bio', // Nome do componente como string
    };
  },
  computed: {
    currentComponent() {
      // Mapeamento dinâmico dos componentes
      const components = {
        Bio: defineAsyncComponent(() => import('./views/Bio.vue')),
        Contact: defineAsyncComponent(() => import('./views/Contact.vue')),
        Experience: defineAsyncComponent(() => import('./views/Experience.vue')),
        Projects: defineAsyncComponent(() => import('./views/Projects.vue')),
        Skills: defineAsyncComponent(() => import('./views/Skills.vue')),
      };
      return components[this.currentSection] || components.Bio;
    }
  },
  methods: {
    setCurrentSection(section) {
      this.currentSection = section;
    }
  }
};
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
