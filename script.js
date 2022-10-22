window.onload = () => {
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