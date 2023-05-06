document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    const lightbox = document.createElement("div");
    const lightboxImage = document.createElement("img");

    lightbox.id = "lightbox";
    lightbox.style.display = "none";
    lightbox.style.position = "fixed";
    lightbox.style.zIndex = "1000";
    lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.top = "0";
    lightbox.style.left = "0";

    lightboxImage.style.position = "absolute";
    lightboxImage.style.margin = "auto";
    lightboxImage.style.top = "0";
    lightboxImage.style.bottom = "0";
    lightboxImage.style.left = "0";
    lightboxImage.style.right = "0";
    lightboxImage.style.maxWidth = "90%";
    lightboxImage.style.maxHeight = "90%";

    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    images.forEach((image) => {
        image.addEventListener("click", function (e) {
            lightboxImage.src = e.target.src;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
});
