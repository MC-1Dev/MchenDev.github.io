var typed= new Typed(".text", {
  strings: ["Game Developer", "Program Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

function handleFullWidthSizing() {
  const scrollbarWidth = window.innerWidth - document.body.clientWidth

  document.querySelector('#mainNav').style.width = `calc(100vw - ${scrollbarWidth}px)`
}


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

