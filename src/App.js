import React from "react";
import Carousel from "./components/Carousel";

function App() {
  const images = [
    {
      url: "https://placehold.co/800x400",
      alt: "Image 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      url: "https://picsum.photos/800/400",
      alt: "Image 2",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return <Carousel images={images} />;
}

export default App;
