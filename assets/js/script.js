//fanger de relevante HTML elementer
let parallaxImage = document.querySelector('.heroImgContainer img');
let visibleAnimEl = document.querySelectorAll(".voresTeamContainerTop, .voresTeamContainerBottom");
let visibleSlideAnimEl = document.querySelectorAll(".lokalNavSection, .oplysningerSection");
let heartIcon = document.querySelector(".heartIcon");
let outlineHeart = document.getElementById("outlineHeart");
let filledHeart = document.getElementById("filledHeart");

//Sætter en værdi for hvor langt man scroller før function aktiverer. 
let scrollThreshold = 650;


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

//function der tildeler active class til de valgte elementer
function delayedAnimation() {
    // Set a timeout to add the class after a delay (e.g., 500ms) Bruger forEach loop til at sætte et delay på 200ms, inden aktiv class tildeles til de valgte elementer
    setTimeout(() => {
      visibleSlideAnimEl.forEach(container => {
        container.classList.add("animationVisibleUp");
      });
    }, 150);
  }
  
  // Kalder funktionen når siden loades
  delayedAnimation();


  //funktion til at trykke på hjertet
  //tilføjer click eventListener til heartIcon variabel
heartIcon.addEventListener("click", function() {
  //// Tjekker om outlineHeart er skjult
    if (outlineHeart.style.display === "none") {
       // Hvis skjult så skal det vises
        outlineHeart.style.display = "block";
         // Skjuler det fyldte hjerte
        filledHeart.style.display = "none";
    } else {
      //tjekker om outline hjerte er vist, hvis ja, så skjules det
        outlineHeart.style.display = "none";
        //viser det fyldte hjerte
        filledHeart.style.display = "block";
    }
});