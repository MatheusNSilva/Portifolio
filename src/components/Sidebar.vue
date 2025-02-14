<template>
  <nav class="sidebar">
    <ul>
      <li @click="$emit('navigate', 'Bio')">Bio</li>
      <li @click="$emit('navigate', 'Experience')">Experiência</li>
      <li @click="$emit('navigate', 'Skills')">Habilidades</li>
      <li @click="$emit('navigate', 'Projects')">Projetos</li>
      <li @click="$emit('navigate', 'Contact')">Contato</li>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar {
  border-radius: 1.5rem;
  width: 200px;
  padding: 20px;
  background: #433939;
  height: 20rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  cursor: pointer;
  padding: 10px;
  margin-bottom: 5px;
  background: rgb(13, 11, 11);
  border-radius: 5px;
  text-align: center;
  transition: 0.3s;
}
li:hover {
  background: #ddd;
}
</style>
