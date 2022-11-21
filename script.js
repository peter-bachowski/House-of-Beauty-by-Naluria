window.onload = () => {
  //checks width of header div then sets height of header div
  let width = $("#header").width();//checks the width at any given time using jquery
  const elementHeader = document.getElementById("header");
  if (width <= 550) {
    elementHeader.style.height = "300px";
  }
  else if ((550 < width) && (width <= 920)) {
    elementHeader.style.height = "400px";
  }
  else if (width > 920) {
    elementHeader.style.height = "600px";
  }

  //get all lightbox and .zoomD images
  let all = document.getElementsByClassName("zoomD"),
    lightbox = document.getElementById("lightbox"),
    buttons = document.getElementsByClassName("btn"),
    signUpSheet = document.getElementById("signUpSheetDiv"),
    closeButton = document.getElementById("close-button");

  //creates a lightbox when the sign up buttons are pressed
  if (buttons.length > 0) {
    for (let i of buttons) {
      i.onclick = () => {
        console.log("It works!");
        lightbox.innerHTML = "";
        lightbox.appendChild(signUpSheet);
        lightbox.className = "showSignUp";
        signUpSheet.style.display = "flex";
      }
    }
  }

  // creates lightbox for images
  if (all.length > 0) {
    for (let j of all) {
      j.onclick = () => {
        let clone = j.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "showImage";
      };
    }
  }
  //CLICK TO CLOSE LIGHTBOX
  lightbox.onclick = () => {
    if (lightbox.className == "showImage") {
      lightbox.className = "";
    }
  }
  closeButton.onclick = () => {
    lightbox.className = "";
    signUpSheet.style.display = "none";
  };
};
//creates a listener on the window and sets the height
//of the header div depending on what width the current page is
window.addEventListener("resize",
  function() {
    let width = $("#header").width();
    const elementHeader = document.getElementById("header");
    if (width <= 550) {
      elementHeader.style.height = "250px";
    }
    else if ((550 < width) && (width <= 920)) {
      elementHeader.style.height = "400px";
    }
    else if (width > 920) {
      elementHeader.style.height = "600px";
    }
  }
);

