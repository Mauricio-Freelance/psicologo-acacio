document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu ul');
    // console.log("linha 4")
  
    // função do hamburger no celular
    hamburger.addEventListener('click', function() {
      document.innerHTML = '';
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
      burger.classList.toggle('active');
    });
  
    // ao apertar no hamburger o burger fica ativo mostrando assim
    //  todas as categorias que inicialmente estavam ocultas
  
    // JavaScript para destacar a seção atual com a cor do link
    function mudarAtivo() {
      const secoes = document.querySelectorAll('section');
      const menuLinks = document.querySelectorAll('.menu a');
  
      let index = secoes.length;
      // console.log("linha 15")
  
      while(--index && window.scrollY + 50 < secoes[index].offsetTop) {}
  
      menuLinks.forEach((link) => link.classList.remove('secao-ativa'));
      if (menuLinks[index]) {
        // console.log('linha 24')
        menuLinks[index].classList.add('secao-ativa');
      }
    }
  
    mudarAtivo();
    window.addEventListener('scroll', mudarAtivo);
  
    // JavaScript para mostrar e esconder respostas de FAQ
    const faqCards = document.querySelectorAll('.faq-card');
  
    faqCards.forEach(card => {
      // console.log("linha 36")
      const question = card.querySelector('.faq-question');
      const answer = card.querySelector('.faq-answer');
      const icon = card.querySelector('i');
  
      question.addEventListener('click', () => {
        // console.log('linha 42')
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none' : 'block';
        icon.classList.toggle('rotate', !isVisible);
      });
    });
  });