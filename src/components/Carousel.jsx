import React, { useState } from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Controlla se l'array 'images' è definito e non vuoto
  if (!images || !Array.isArray(images) || images.length === 0) {
    return null; // Restituisci null se l'array non è valido
  }

  // Controlla se l'indice corrente è valido
  if (currentIndex < 0 || currentIndex >= images.length) {
    return null; // Restituisci null se l'indice non è valido
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="carousel-image"
      />
      <div className="carousel-text">{images[currentIndex].text}</div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default Carousel;
