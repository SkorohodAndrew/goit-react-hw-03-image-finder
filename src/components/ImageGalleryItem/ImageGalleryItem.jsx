import React from 'react';
import { ImageGalleryList, ImageGalleryImage } from './ImageGalleryItemStyled';

export const ImageGalleryItem = ({ image, largeImg, name, onClick }) => {
  return (
    <ImageGalleryList onClick={() => onClick(largeImg)}>
      <ImageGalleryImage src={image} alt={name} />
    </ImageGalleryList>
  );
};
