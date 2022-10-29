window.onload = () => {
  //checks width of header div then sets height of div
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
    lightbox = document.getElementById("lightbox");

  //CLICK TO SHOW IMAGE IN LIGHTBOX
  //CLONE INTO LIGHTBOX & SHOW
  if (all.length > 0) {
    for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
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

const btnElements = document.getElementsByClassName("btn");

function myFunction() {
  console.log("It works!");
  let lightbox = document.getElementById("lightbox");
  //CLICK TO SHOW IMAGE IN LIGHTBOX
  //CLONE INTO LIGHTBOX & SHOW
  if (all.length > 0) {
    for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
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
}