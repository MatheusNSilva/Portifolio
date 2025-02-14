<template>
    <section class="projects-container">
      <h2 class="title">Projetos</h2>

      <div class="projects-list">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <h3 class="project-title">{{ project.name }}</h3>
          <p class="description">{{ project.description }}</p>
          <p class="technologies">
            <strong>Tecnologias:</strong> {{ project.technologies.join(", ") }}
          </p>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
            aria-label="Ver projeto no GitHub"
          >
            🔗 Ver no GitHub
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            name: "Simulador de Operações Financeiras",
            description: "Aplicação para calcular financiamentos e investimentos.",
            technologies: ["Vue.js", "Node.js", "MongoDB", "Docker"],
            link: "https://github.com/seuusuario/simulador-financeiro"
          },
          {
            name: "Gerenciador de Tarefas",
            description: "Plataforma para organização de tarefas e produtividade.",
            technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
            link: "https://github.com/seuusuario/gerenciador-tarefas"
          },
          {
            name: "Meu Portfólio",
            description: "Site pessoal para apresentar minhas habilidades e projetos.",
            technologies: ["Vue.js", "Vite", "CSS Modules"],
            link: "https://github.com/seuusuario/portfolio"
          },
          {
            name: "Simulador de Operações Financeiras",
            description: "Aplicação para calcular financiamentos e investimentos.",
            technologies: ["Vue.js", "Node.js", "MongoDB", "Docker"],
            link: "https://github.com/seuusuario/simulador-financeiro"
          },
          {
            name: "Gerenciador de Tarefas",
            description: "Plataforma para organização de tarefas e produtividade.",
            technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
            link: "https://github.com/seuusuario/gerenciador-tarefas"
          },
          {
            name: "Meu Portfólio",
            description: "Site pessoal para apresentar minhas habilidades e projetos.",
            technologies: ["Vue.js", "Vite", "CSS Modules"],
            link: "https://github.com/seuusuario/portfolio"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .projects-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
  
  .project-card {
    background: #1a2026;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .project-card:hover {
    transform: scale(1.05);
  }
  
  .project-title {
    font-size: 18px;
    font-weight: bold;
  }
  
  .description {
    font-size: 16px;
    color: #555;
    margin: 5px 0;
  }
  
  .technologies {
    font-size: 14px;
    color: #777;
  }
  
  .project-link {
    display: inline-block;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  
  .project-link:hover {
    text-decoration: underline;
  }
  </style>
  