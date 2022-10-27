window.onload = () => {
  //checks width of header div then sets height of div
  let width = $("#header").width();
  if(width <= 550){
  document.getElementById("header").style.height = "300px";
  }
  else if(width > 550){
    document.getElementById("header").style.height = "600px";
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
function(){
  let width = $("#header").width();
  if(width <= 550){
  document.getElementById("header").style.height = "300px";
  }
  else if(width > 550){
    document.getElementById("header").style.height = "600px";
  }
}
);



