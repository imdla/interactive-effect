let currentIndex = 0;
const gallery = document.querySelector('.gallery'),
        images = gallery.querySelectorAll('img'),
        totalImages = images.length,
        closeBtn = document.querySelector('#close-btn'),
        prevBtn = document.querySelector('#prev-btn'),
        nextBtn = document.querySelector('#next-btn');

gallery.addEventListener('click', openLightbox);
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', () => {changeImage(-1)});
nextBtn.addEventListener('click', () => {changeImage(1)});

function openLightbox(e) {
    if (e.target.tagName == 'IMG') {
        const clickedIndex = Array.from(images).indexOf(e.target);
        currentIndex = clickedIndex;
        console.log(currentIndex);
        updateLightboxImage();
        document.querySelector('#lightbox').style.display = 'flex';
    }
}

function closeLightbox() {
    document.querySelector('#lightbox').style.display = 'none';
}

function updateLightboxImage() {
    const lightboxImg = document.querySelector('#lightbox-img');
    const thumbnailContainer = document.querySelector('#thumbnail-container');
    lightboxImg.src = images[currentIndex].src;
    thumbnailContainer.innerHTML = '';
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => updateMainImage(index));
        thumbnailContainer.appendChild(thumbnail);
    });

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails[currentIndex].classList.add('active-thumbnail');
    console.log(currentIndex);
}
updateLightboxImage();

function updateMainImage(index) {
    currentIndex = index;
    updateLightboxImage();
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateLightboxImage();
}
document.addEventListener('keydown', (e) => {
    if (document.querySelector('#lightbox').style.display === 'flex') {
        console.log(e.key);
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});