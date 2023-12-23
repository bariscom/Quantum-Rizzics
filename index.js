function showConfetti() {
    confetti();
    Swal.fire({
        title: 'Yay!',
        text: 'Confetti time!',
        icon: 'success',
        confirmButtonText: 'Awesome!'
    });
}

function moveNoAway() {
    let noButton = document.getElementById('no');
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * (window.innerWidth - noButton.clientWidth) + 'px';
    noButton.style.top = Math.random() * (window.innerHeight - noButton.clientHeight) + 'px';
}



function showVideo() {
    const videoFrame = document.getElementById('video-frame');


    videoFrame.src = 'https://www.youtube.com/embed/8Qc29mubbzk?autoplay=1&controls=0&mute=0';


    document.getElementById('video-container').classList.add('show');
    videoFrame.style.display = 'block';
}
