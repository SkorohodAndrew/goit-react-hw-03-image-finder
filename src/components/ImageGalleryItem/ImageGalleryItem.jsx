import React from 'react';

export const ImageGalleryItem = ({ image, name, largeImg }) => {
  return (
    <li class="gallery-item">
      <img src={image} alt={name} />
    </li>
  );
};
