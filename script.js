document.addEventListener("DOMContentLoaded", function() {
    const commentForms = document.querySelectorAll(".comment-form");
    
    commentForms.forEach(function(form) {
        const input = form.querySelector(".comment-input");
        const button = form.querySelector(".post-btn");
        const commentsList = form.parentElement.querySelector(".comments-list");
        
        function postComment() {
            const commentText = input.value.trim();
            
            if (commentText !== "") {
                const commentDiv = document.createElement("div");
                commentDiv.className = "comment";
                
                const now = new Date();
                const timeString = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" });
                
                commentDiv.innerHTML = "<strong>luuk_2.0</strong> " + commentText + " <span class='comment-time'>(" + timeString + ")</span>";
                
                commentsList.appendChild(commentDiv);
                input.value = "";
            }
        }
        
        button.addEventListener("click", postComment);
        
        input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                postComment();
            }
        });
    });
});
