function loadSection(section) {
    console.log('Carregando seção:', section);
    fetch(`src/sections/${section}.html`)
      .then(response => response.text())
      .then(html => document.getElementById('content').innerHTML = html)
      .catch(error => console.error('Erro ao carregar seção:', error));
}
