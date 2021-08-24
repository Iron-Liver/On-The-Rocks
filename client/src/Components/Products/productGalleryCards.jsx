import * as React from "react";
//import "./styles.css";

export default function ProductsImages() {
  const myGallery = window.cloudinary.galleryWidget({
    container: "#my-gallery",
    cloudName: "on-the-rocks",
    mediaAssets: [{ tag: "sql" }]
  });

  myGallery.render();
  return (
    <div className="App">
      <h1>Cloudinary</h1>
      <h2>Product Gallery Widget</h2>
      <div id="my-gallery"></div>
    </div>
  );
}