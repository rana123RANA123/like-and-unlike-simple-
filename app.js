let isLiked = false;
let likeCount = 0;

function toggleLike() {
    if (isLiked) {
        unlikePost();
    } else {
        likePost();
    }
}

function likePost() {
    isLiked = true;
    likeCount++;
    updateUI();
}

function unlikePost() {
    isLiked = false;
    likeCount--;
    updateUI();
}

function updateUI() {
    const likeButton = document.getElementById("likeButton");
    const likeCountElement = document.getElementById("likeCount");

    likeButton.textContent = isLiked ? "Unlike" : "Like";
    likeCountElement.textContent = likeCount;
}
