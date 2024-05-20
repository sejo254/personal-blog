document.addEventListener("DOMContentLoaded", function() {
    const playlist = document.querySelectorAll('.playlist li');
    const audioPlayer = document.getElementById('audio-player');

    playlist.forEach(function(song) {
        song.addEventListener('click', function() {
            const songSrc = song.getAttribute('data-src');
            audioPlayer.src = songSrc;
            audioPlayer.play();
        });
    });
});
