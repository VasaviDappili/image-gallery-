let scrollAmount = 0;
const scrollStep = 220;
const gallery = document.querySelector('.gallery');

function scrollGallery(direction) {
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;

    scrollAmount += direction * scrollStep;

    if (scrollAmount < 0) {
        scrollAmount = 0;
    } else if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }

    gallery.style.transform = `translateX(-${scrollAmount}px)`;
}
