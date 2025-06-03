// Seleciona os elementos que devem ser animados
const timelineItems = document.querySelectorAll('.timeline-content');

// Função de callback do Intersection Observer
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');  // Adiciona a classe 'visible' quando entra na tela
      observer.unobserve(entry.target);  // Para observar esse item após ele ser visível
    }
  });
};

// Cria uma instância do Intersection Observer
const observer = new IntersectionObserver(callback, {
  threshold: 0.5  // A animação será acionada quando 50% do elemento estiver visível
});

// Observa todos os elementos da timeline e parágrafos
timelineItems.forEach(item => {
  observer.observe(item);
});
