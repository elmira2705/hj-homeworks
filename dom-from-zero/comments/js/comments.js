'use strict';

function showComments(list) {
  const commentsContainer = document.querySelector('.comments');
  const comments = list.map(createComment);
  
  const node = comments.reduce((fragment, item) => {
    fragment.appendChild(item);
    return fragment;
  }, document.createDocumentFragment());
  commentsContainer.appendChild(node);
}

function createComment(comment) {
  const commentWrap = document.createElement("div");
  commentWrap.className = "comment-wrap";
  
  const photo = document.createElement("div");
  photo.className = "photo";
  photo.setAttribute("title", comment.author.name);
  
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.style.backgroundImage = `url('${comment.author.pic}')`;
  console.log(avatar.style.background);
  
  const commentBlock = document.createElement("div");
  commentBlock.className = "comment-block";
  
  const commentText = document.createElement("p");
  commentText.className = "comment-text";
  const textNode = document.createTextNode(comment.text); 
  commentText.appendChild(textNode);
  
  const bottomComment = document.createElement("div");
  bottomComment.className = "bottom-comment";
  
  const commentDate = document.createElement("div");
  commentDate.className = "comment-date";
  commentDate.textContent = new Date(comment.date).toLocaleString('ru-Ru');
  
  const actions = document.createElement("ul");
  actions.className = "comment-actions";
  
  const complain = document.createElement("li");
  complain.className = "complain";
  complain.textContent = 'Пожаловаться';
  
  const reply = document.createElement("li");
  reply.className = "reply";
  reply.textContent = 'Ответить';
  
  actions.appendChild(complain);
  actions.appendChild(reply);
  bottomComment.appendChild(commentDate);
  bottomComment.appendChild(actions);
  commentBlock.appendChild(commentText);
  commentBlock.appendChild(bottomComment);
  photo.appendChild(avatar);
  commentWrap.appendChild(photo);
  commentWrap.appendChild(commentBlock);
  
  return commentWrap;
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);
