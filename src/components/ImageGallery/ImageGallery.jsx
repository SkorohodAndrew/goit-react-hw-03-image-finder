import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryImage } from './ImageGalleryStyled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <GalleryImage>
      {images.length > 0 &&
        images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              largeImg={largeImageURL}
              name={tags}
              onClick={onClick}
            ></ImageGalleryItem>
          );
        })}
    </GalleryImage>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
