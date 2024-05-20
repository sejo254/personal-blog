document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.querySelectorAll('.prev').forEach(button => button.addEventListener('click', () => changeSlide(-1)));
document.querySelectorAll('.next').forEach(button => button.addEventListener('click', () => changeSlide(1)));

// Update the user's location and time
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = `Current time: ${now.toLocaleTimeString()}`;
}

function updateLocation() {
    const locationElement = document.getElementById('location');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                locationElement.textContent = `Your current location: Latitude ${latitude.toFixed(2)}, Longitude ${longitude.toFixed(2)}`;
            },
            error => {
                locationElement.textContent = 'Unable to retrieve location.';
            }
        );
    } else {
        locationElement.textContent = 'Geolocation is not supported by your browser.';
    }
}

updateTime();
updateLocation();
setInterval(updateTime, 1000);
