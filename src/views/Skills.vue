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
          { name: "Redux", icon: "🟩" },
          { name: "JavaScript", icon: "🟨" },
          { name: "TypeScript", icon: "🟨" },
          { name: "React", icon: "🟨" },
          { name: "Material-ui", icon: "🟨" },
          { name: "SQL", icon: "🟨" },
          { name: "Node.js", icon: "🟩" },
          { name: "HTML5", icon: "🔵" },
          { name: "CSS3", icon: "🔵" },
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
    background: #1a2026;
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
  