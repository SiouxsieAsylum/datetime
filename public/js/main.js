
const windowHeight = window.innerHeight;
const nav = document.getElementById("nav");
const body = document.getElementsByTagName('body')[0];
// var buttons = Array.from(document.getElementsByClassName("online-presence"));


function scrollTo(){

  window.addEventListener("scroll", function(){

// ~~~~~~~~~~~~~~~~~BOUNDERIES~~~~~~~~~~~~~~~~~~~~~~~~~
    // var windowTop = window.getBoundingClientRect().top;
    var top = body.getBoundingClientRect().top;

    if (top < windowHeight){
      nav.style.position = "fixed";
      nav.style.top = "0";
    } else {
      nav.style.position = "initial";
    }

// ~~~~~~~~~~~~~~~~~BUTTON CONTROL~~~~~~~~~~~~~~~~~~~~~~~~~

  // if (headerBottom > windowHeight){
  //     nav.style.position = "fixed";
  //     nav.style.top = "0";
  //   } else {
  //     nav.style.position = "initial";
  //   }

  })

}




