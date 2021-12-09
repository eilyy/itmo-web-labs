window.addEventListener('DOMContentLoaded', async () => {
    const commentsBlock = document.querySelector('#comments_section');

    const randomId = Math.floor(Math.random() * 100);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}/comments`);

    document.querySelector('.spinner-wrapper').style.display = 'none';

    if(!response.ok) {
        const newErr = document.createElement('div');
        newErr.classList.add('error');
        newErr.innerText = 'Что-то пошло не так';
        commentsBlock.appendChild(newErr);
        return;
    }

    const comments = await response.json();

    if(comments.length === 0) {
        const newErr = document.createElement('div');
        newErr.classList.add('error');
        newErr.innerText = 'Что-то пошло не так';
        commentsBlock.appendChild(newErr);
        return;
    }

    comments.forEach(com => {
        const newCom = document.createElement('div');
        newCom.classList.add('comment');
        newCom.innerHTML =
            `<div class="comment__author">
                <div class="comment__name">${com['name']}</div>
                <div class="comment__email">${com['email']}</div>
            </div>
            <div class="comment__content">${com['body']}</div>`;
        commentsBlock.appendChild(newCom);
    });
});