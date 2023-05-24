export default (commentsObj) => {
    const commentsContainer = document.querySelector('.pp-comments-container');

    while (commentsContainer.firstChild) {
        commentsContainer.removeChild(commentsContainer.firstChild);
      }
      
  commentsObj.forEach((commentObj) => {

    const comment = document.createElement('li');
    comment.className = 'pp-comment';
    comment.innerHTML = `
    ${commentObj.creation_date}
    ${commentObj.username} : ${commentObj.comment}
    `;
    commentsContainer.appendChild(comment);
  });
}