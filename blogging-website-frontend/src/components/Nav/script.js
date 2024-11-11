window.addEventListener('scroll', function(){
  let nav = document.querySelector('.navbar');
  nav.classList.toggle('active', window.scrollY > 0);
})


