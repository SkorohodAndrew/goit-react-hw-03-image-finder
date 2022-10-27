import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.length > 0 &&
        images.map(({ id, webformatURL, largeImageURL, tag }) => {
          return (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              largeImg={largeImageURL}
              name={tag}
            />
          );
        })}
    </div>
  );
};
