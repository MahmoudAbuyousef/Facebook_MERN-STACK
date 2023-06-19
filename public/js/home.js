let writeBostBtn = document.getElementById("write-post");
let writeBostPopup = document.getElementById("write-post-popup");
writeBostBtn.onclick = function () {
  writeBostPopup.style.display = "block";
};

let cancelePost = document.getElementById("cancle-post");
cancelePost.onclick = function () {
  writeBostPopup.style.display = "none";
};

let inserComment = document.getElementById("insert-commnet");
let commnetContent = document.getElementById("add-comment");
inserComment.onclick = () => {
  commnetContent.style.display = "flex";
};

let showCommentsOptions = document.getElementById("show-comment-options");
let commentOption = document.getElementById("comment-option");
showCommentsOptions.onclick = () => {
  commentOption.style.display = "block";
};
