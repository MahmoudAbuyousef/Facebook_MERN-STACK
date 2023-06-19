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

let likeIconShow = document.getElementById("like-icon-show");
let likeIconHidden = document.getElementById("like-icon-hidden");
let likeBtn = document.getElementById("like");

if (likeIconShow) {
  likeIconShow.addEventListener("click", () => {
    likeBtn.classList.add("active");
    likeIconHidden.style.display = "inline";
    likeIconShow.style.display = "none";
  });
}
if (likeIconHidden) {
  likeIconHidden.addEventListener("click", () => {
    likeBtn.classList.remove("active");
    likeIconShow.style.display = "inline";
    likeIconHidden.style.display = "none";
  });
}
