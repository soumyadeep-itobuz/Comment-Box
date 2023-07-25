const arrayComment = JSON.parse(localStorage.getItem("arrayComment")) || [];
const comment = document.querySelector(".comment");
const showComment = document.querySelector(".show-comment");
const inputBox = document.querySelector(".input-box");
const commentList = document.getElementsByClassName("comment-list");

function show() {
  showComment.innerHTML = "";
  for (let i = 0; i < arrayComment.length; i++) {
    showComment.innerHTML += `<li class="comment-list d-flex justify-content-between p-3 text-center border w-50 mx-auto my-3">${arrayComment[i]}
        <button onclick="changeColor(${i})">Change Color</button></li>`;
  }
}

function postComment() {
  arrayComment.push(comment.value);
  localStorage.setItem("arrayComment", JSON.stringify(arrayComment));
  show();
}

function changeColor(i) {
  commentList[i].classList.toggle("change");
}

show();