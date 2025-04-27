
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('You liked the post!');
    });
});


document.querySelectorAll('.comment-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent form submission

        const commentText = form.querySelector('textarea').value;
        const commentList = form.nextElementSibling;
        

        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<strong>You:</strong> <p>${commentText}</p> <button class="delete-btn">Delete</button>`;
        
        commentList.appendChild(newComment);
        

        form.querySelector('textarea').value = '';

        newComment.querySelector('.delete-btn').addEventListener('click', function() {
            newComment.remove();
        });
    });
});