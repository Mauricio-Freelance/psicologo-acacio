document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu ul');
  
  hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // JavaScript para destacar a seção atual com a cor do link
  const secoes = document.querySelectorAll('section');
  const menuLinks = document.querySelectorAll('.menu a');

  function mudarAtivo() {
    let index = secoes.length;

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

document.addEventListener("DOMContentLoaded", function() {
  const prevBtn = document.querySelector('#beneficios .carousel-btn.prev');
  const nextBtn = document.querySelector('#beneficios .carousel-btn.next');
  const cards = document.querySelector('#beneficios .cards');
  let currentIndex = 0;
  const totalCards = 6;
  let cardWidth = cards.children[1].offsetWidth; 
  let offsetIncrement = 65;

  function adjustOffsetIncrement() {
    if (window.innerWidth > 768) {
      offsetIncrement = 25; // ou qualquer valor que você deseja para janelas maiores
    } else {
      offsetIncrement = 65; // valor padrão para janelas menores
    }
  }

  adjustOffsetIncrement();

  prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
      handleButtons();
    }
  });

  nextBtn.addEventListener('click', function() {
    if (currentIndex < totalCards - 1) { 
      currentIndex++;
      updateCarousel();
      handleButtons();
    }
  });

  function updateCarousel() {
    cardWidth = cards.children[1].offsetWidth;
    const newTransform = -currentIndex * cardWidth - (currentIndex * offsetIncrement);
    cards.style.transform = `translateX(${newTransform}px)`;
  }

  function handleButtons() {
    if (currentIndex === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
    }

    if (currentIndex >= totalCards - 1) {
      nextBtn.style.display = 'none';
    } else {
      nextBtn.style.display = 'block';
    }
  }

  window.addEventListener('resize', function() {
    adjustOffsetIncrement();
    updateCarousel();
  });

  updateCarousel();
  handleButtons();
});

