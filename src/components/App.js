// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <>
      {images.map((img) => {
        if (img === null) {
          return <p>Loading...</p>;
        } else <img src={img} />;
      })}
    </>
  );
}
export default App;
