document.addEventListener('DOMContentLoaded', () => {
    const progressElement = document.querySelector('.progress');
    const progressValue = 75; // Example value, this can be fetched from the server

    progressElement.style.width = progressValue + '%';
    progressElement.textContent = progressValue + '%';
});
