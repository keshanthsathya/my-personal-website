window.addEventListener('load', () => {
    // Hide the loading screen after 3 seconds and show the content
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
    }, 3000); // Loading screen duration
});

// Handle finger hover interactions
const fingers = document.querySelectorAll('.finger');
const dialog = document.getElementById('about-dialog');
const closeButton = document.getElementById('close-dialog');

// Display dialog on finger hover
fingers.forEach((finger, index) => {
    finger.addEventListener('mouseover', () => {
        dialog.style.display = 'block';
    });
});

// Close the dialog when the close button is clicked
closeButton.addEventListener('click', () => {
    dialog.style.display = 'none';
});
