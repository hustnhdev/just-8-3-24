function progress() {
    var percent = document.querySelector('.percent');
    var progress = document.querySelector('.progress');
    var text = document.querySelector('.text');
    var body = document.body; // Reference to the body element

    var count = 4;
    var per = 16;

    var loading = setInterval(animate, 50);

    function animate() {
        if (count == 100 && per == 400) {
            percent.classList.add("text-blink");
            text.style.display = "block";
            clearInterval(loading);

            // Add a class to the body to trigger the transition effect
            body.classList.add('loaded');

            // Redirect to a new page after the transition effect completes
            setTimeout(function () {
                window.location.href = 'main.html'; // Replace with the desired URL
            }, 1000); // Adjust the time (in milliseconds) based on your transition duration
        } else {
            per = per + 4;
            count = count + 1;
            progress.style.width = per + 'px';
            percent.textContent = count + '%';
        }
    }
}

progress();
