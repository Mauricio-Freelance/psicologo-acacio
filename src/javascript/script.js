// JavaScript para destacar a seção atual com a cor do link
document.addEventListener('DOMContentLoaded', (event) => {
  const secoes = document.querySelectorAll('section');
  const menuLinks = document.querySelectorAll('.menu a');

  function mudarAtivo() {
    let index = secoes.length;

    while(--index && window.scrollY + 50 < secoes[index].offsetTop) {}

    menuLinks.forEach((link) => link.classList.remove('secao-ativa'));
    if(menuLinks[index]) menuLinks[index].classList.add('secao-ativa');
  }

  mudarAtivo();
  window.addEventListener('scroll', mudarAtivo);
});


document.addEventListener('DOMContentLoaded', () => {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
      const question = card.querySelector('.faq-question');
      const answer = card.querySelector('.faq-answer');
      const icon = card.querySelector('i');

      question.addEventListener('click', () => {
          const isVisible = answer.style.display === 'block';
          answer.style.display = isVisible ? 'none' : 'block';
          icon.classList.toggle('rotate', !isVisible);
      });
  });
});

