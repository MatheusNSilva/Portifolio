<template>
    <section class="skills-container">
      <h2 class="title">Habilidades</h2>
      
      <div class="skills-list">
        <div v-for="(skill, index) in skills" :key="index" class="skill-card">
          <span class="skill-icon">{{ skill.icon }}</span>
          <p class="skill-name">{{ skill.name }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: [
          { name: "Vue.js", icon: "🟩" },
          { name: "JavaScript", icon: "🟨" },
          { name: "Node.js", icon: "🟩" },
          { name: "HTML & CSS", icon: "🔵" },
          { name: "MongoDB", icon: "🍃" },
          { name: "Docker", icon: "🐳" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .skills-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .skill-card {
    display: flex;
    align-items: center;
    background: #f8f9fa;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .skill-icon {
    font-size: 20px;
    margin-right: 10px;
  }
  
  .skill-name {
    font-size: 16px;
  }
  </style>
  