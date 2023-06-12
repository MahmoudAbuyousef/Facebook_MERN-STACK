let writeBostBtn = document.getElementById("write-post");
let writeBostPopup = document.getElementById("write-post-popup");
writeBostBtn.onclick = function () {
  writeBostPopup.style.display = "block";
};


let cancelePost = document.getElementById("cancle-post");
cancelePost.onclick = function () {
  writeBostPopup.style.display = "none";
};
