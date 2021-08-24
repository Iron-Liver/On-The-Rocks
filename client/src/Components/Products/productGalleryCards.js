// import * as React from "react";
// // import "./styles.css";
// declare var cloudinary: any;

// export default function App(props:any) {
//   console.log('test',props.product)
//   if(props.product){
//     const myGallery = cloudinary.galleryWidget({
//       container: `.my-gallery`,
//       cloudName: "dpw5docvm",
//       mediaAssets: [{ tag: `roulette` }]
//     });
  
//     myGallery.render();
//   }
//   return (
//       <div className="my-gallery"></div>
//   );
// }
import React, { useRef } from 'react';

const SingleProduct = ({ product }) => {
  const slug  = product;
  const cloudnaryGalleryRef = useRef(null);


  if (typeof window !== 'undefined'){
    if (!cloudnaryGalleryRef.current) {
      cloudnaryGalleryRef.current = window.cloudinary
        .galleryWidget({
          container: '.my-gallery',
          cloudName: 'dpw5docvm',
          carouselStyle: 'thumbnails',
          thumbnailProps: {
            width: 75,
            height: 75,
            spacing: 4,
            navigationColor: 'green',
          },
          mediaAssets: [{ tag: "roulette" }],
        })
        .render();
    }
  }
  

  return <div className="my-gallery"></div>;
};

export default SingleProduct;