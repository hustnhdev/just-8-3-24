function startGame() {
    // Add flash overlay
    const flashOverlay = document.createElement('div');
    flashOverlay.classList.add('flash-overlay');
    document.getElementById('game-board').appendChild(flashOverlay);
    document.querySelector('.background img').remove(); // Change to your new background image path
    document.querySelector('.wood-board img').remove();
    // Change background after a delay
    setTimeout(() => {
        document.querySelector('.flash-overlay').remove();
    }, 2000); // Adjust the delay duration (in milliseconds) as needed
}

document.addEventListener('DOMContentLoaded', function () {
    var imageWrappers = document.querySelectorAll('.image-wrapper');
    var currentIndex = 0;
    var gameStarted = false;
    var popupContainer = document.getElementById('popup-container');

    function showNextImage() {
        if (gameStarted && currentIndex < imageWrappers.length) {
            var currentImageWrapper = imageWrappers[currentIndex];
            var currentImage = currentImageWrapper.querySelector('img');
            var currentTitle = currentImageWrapper.querySelector('.image-title');

            currentImage.classList.remove('hidden');
            currentTitle.classList.remove('hidden');
            currentImageWrapper.classList.add('visible');

            currentIndex++;
        } else if (currentIndex === imageWrappers.length) {
            
            // Display the popup after showing the last image
            popupContainer.style.display = 'block';
            popupContainer.classList.add('visible');
            showPopup();
            console.log("...");
        }
    }
    function showPopup() {
        popupContainer.classList.add('visible');
        document.querySelectorAll('.popup p, .popup img').forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 1000); // Adjust the delay as needed
        });
    }
    // Event listener for the start message
    document.querySelector('.start-message').addEventListener('click', function () {
        this.classList.add('hidden');
        gameStarted = true;
    });

    // Event listeners for image transitions
    document.addEventListener('click', showNextImage);

});

document.addEventListener('wheel', function (event) {
    // Prevent the default behavior of the wheel event
    event.preventDefault();
}, { passive: false });