<template>
    <section class="experience-container">
      <h2 class="title">Experiência Profissional</h2>
  
      <div v-for="(job, index) in experiences" :key="index" class="experience-card">
        <h3 class="job-title">{{ job.role }}</h3>
        <p class="company">{{ job.company }}</p>
        <p class="period">{{ job.period }}</p>
        <ul class="responsibilities">
          <li v-for="(task, i) in job.responsibilities" :key="i">
            {{ task }}
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experiences: [
          {
            role: "Desenvolvedor Fullstack",
            company: "Inova Tecnologia",
            period: "Jan 2023 - Presente",
            responsibilities: [
              "Desenvolvimento de aplicações web com Vue.js e Node.js",
              "Integração com APIs REST e WebSockets",
              "Manutenção de banco de dados SQL e NoSQL"
            ]
          },
          {
            role: "Desenvolvedor Frontend",
            company: "Iluminus Marketing",
            period: "Mar 2021 - Dez 2022",
            responsibilities: [
              "Criação de interfaces interativas com Vue.js e Tailwind CSS",
              "Otimização de SEO e performance",
              "Colaboração com designers para UX/UI"
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .experience-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .experience-card {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .job-title {
    font-size: 18px;
    font-weight: bold;
  }
  
  .company {
    font-size: 16px;
    color: #555;
  }
  
  .period {
    font-size: 14px;
    color: #777;
    margin-bottom: 10px;
  }
  
  .responsibilities {
    list-style: disc;
    padding-left: 20px;
  }
  </style>
  