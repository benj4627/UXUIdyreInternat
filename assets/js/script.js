//fanger de relevante HTML elementer
const parallaxImage = document.querySelector('.heroImgContainer img');
let visibleAnimEl = document.querySelectorAll(".voresTeamContainerTop, .voresTeamContainerBottom");
//Sætter en værdi for hvor langt man scroller før function aktiverer. 
let scrollThreshold = 800;

function toggleClassScroll() {
  //tilføjer eventListnere som lytter efter scroll-begivenheden. Når brugeren scroller siden, udføres funktionen.
  window.addEventListener("scroll", function() {
    //Tjekker, om den aktuelle scroll position (window.scrollY) er større end  det tilladte scrollThreshold på 100
    if (window.scrollY > scrollThreshold) {
      //Gennemgår HTML elementer visibleAnimEl og tilføjer klassen animationVisible. 
      visibleAnimEl.forEach(container => {
        container.classList.add("animationVisible");
      });
    }
  });
};
//kalder function når siden loader, for at tjekke scroll position
toggleClassScroll();


//tilføjer eventListner som lytter efter scroll-begivenheden.
window.addEventListener('scroll', function() {
  // fanger scroll positionen, og giver det til det valgte HTML element
  let scrollPosition = window.scrollY;
  
  //flytter img en smule, når brugeren scroller ned. Tildeler CSS styling med translate y og en værdi dertil 
  parallaxImage.style.transform = 'translateY(' + scrollPosition * 0.25 + 'px)';
});

