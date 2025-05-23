// nav

function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("nav-con").style.display = "none";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("nav-con").style.display = "flex";
    document.getElementById("lightbox-img").style.display = "block";
}