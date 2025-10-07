// Comment functionality
document.addEventListener('DOMContentLoaded', function() {
    const commentForms = document.querySelectorAll('.comment-form-mini');
    
    commentForms.forEach((form, index) => {
        const input = form.querySelector('.comment-input-mini');
        const button = form.querySelector('.post-btn-mini');
        const commentsList = form.parentElement.querySelector('.comments-mini-list');
        
        button.addEventListener('click', function() {
            const commentText = input.value.trim();
            
            if (commentText !== '') {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                commentDiv.innerHTML = `<strong>luuk_2.0:</strong> ${commentText}`;
                
                commentsList.appendChild(commentDiv);
                input.value = '';
            }
        });
        
        // Allow Enter key to post comment
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                button.click();
            }
        });
    });
});