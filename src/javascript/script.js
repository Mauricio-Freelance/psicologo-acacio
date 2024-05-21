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
