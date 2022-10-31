window.onload = () => {
  //checks width of header div then sets height of header div
  let width = $("#header").width();
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

  //GET LIGHTBOX & ALL .ZOOMD IMAGES
  let all = document.getElementsByClassName("zoomD"),
    lightbox = document.getElementById("lightbox"),
    buttons = document.getElementsByClassName("btn"),
  //signUpSheet = document.createElement("signUpSheetDiv");

  //signUpSheet.id = "signUpSheetDiv";

  //creates a lightbox when the buttons are pressed
  if (buttons.length > 0) {
    for (let i of buttons) {
      i.onclick = () => {
        console.log("It works!");
        lightbox.innerHTML = "";
        lightbox.appendChild(signUpSheet);
        lightbox.className = "show";
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
        lightbox.className = "show";
      };
    }
  }
  //CLICK TO CLOSE LIGHTBOX
  lightbox.onclick = () => {
    lightbox.className = "";
  };
};

window.addEventListener("resize",
  function() {
    let width = $("#header").width();
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
  }
);

