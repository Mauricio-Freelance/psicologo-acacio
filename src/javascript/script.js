document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu ul');
  console.log("linha 4")

  // função do hamburger no celular
  hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // JavaScript para destacar a seção atual com a cor do link
  function mudarAtivo() {
    const secoes = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menu a');

    let index = secoes.length;
    console.log("linha 15")

    while(--index && window.scrollY + 50 < secoes[index].offsetTop) {}

    
    menuLinks.forEach((link) => link.classList.remove('secao-ativa'));
    if (menuLinks[index]) menuLinks[index].classList.add('secao-ativa');
  }

  mudarAtivo();
  window.addEventListener('scroll', mudarAtivo);

  // JavaScript para mostrar e esconder respostas de FAQ
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

document.addEventListener("DOMContentLoaded", function() {
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const cards = document.querySelector('.cards');
  let currentIndex = 0;
  const cardWidth = cards.children[0].offsetWidth;
  const offsetIncrement = 25; 

  prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
      handleButtons();
    }
  });

  nextBtn.addEventListener('click', function() {
    if (currentIndex < cards.children.length - 1) {
      currentIndex++;
      updateCarousel();
      handleButtons();
    }
  });

  function updateCarousel() {
    const newTransform = -currentIndex * cardWidth - (currentIndex * offsetIncrement);
    cards.style.transform = `translateX(${newTransform}px)`;
  }

  function handleButtons() {
    if (currentIndex === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
    }

    if (currentIndex === cards.children.length - 1) {
      nextBtn.style.display = 'none';
      nextBtn.disabled = true;
    } else {
      nextBtn.style.display = 'block';
      nextBtn.disabled = false;
    }
  }

  window.addEventListener('resize', updateCarousel);

  updateCarousel();
  handleButtons();
});

