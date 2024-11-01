

const typeComments = document.querySelectorAll('.text-ar');
const submitButtons = document.querySelectorAll('.btn-cmt');
const commentSections = document.querySelector('.commentaire'); 
submitButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const input = typeComments[index];
        const commentText = input.value.trim();

        if (commentText !== "") {
            const newComment = document.createElement('p');
            newComment.className = 'comnts-place';
            newComment.textContent = commentText; 

            commentSections.insertBefore(newComment, commentSections.firstChild);
            input.value = '';
        } else {
            alert('Please enter a comment before submitting.');
        }
    });
});
