// Array cu imaginile din folderul ../MEDIA
const images: string[] = [
    "../MEDIA/g1.jpeg",
    "../MEDIA/g2.jpeg",
    "../MEDIA/g3.jpeg",
    "../MEDIA/g4.jpeg"
];

// Obtinem elementul principal din DOM
const mainImage = document.getElementById("carousel-image") as HTMLImageElement;

// Verificam daca elementul exista
if (!mainImage) throw new Error("Elementul carousel-image nu a fost gasit!");

let currentIndex = 0;

// Functie care schimba imaginea mare
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex]!;
    animateImage();
}

function animateImage() {
    mainImage.style.transform = "scale(1.1)";
    setTimeout(() => {
        mainImage.style.transform = "scale(1)";
    }, 500);
}

// Slider automat la 3 secunde
setInterval(showNextImage, 3000);
