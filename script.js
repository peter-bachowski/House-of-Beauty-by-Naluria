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

window.addEventListener("resize", 
function(){
  let width = $("#home").width();
  if(width <= 550){
  document.getElementById("home").style.height = "200px";
  console.log("The height has been changed.");
  }
  else if(width > 550){
    document.getElementById("home").style.height = "600px";
    console.log("The height has been changed.");
  }
}
);



