import { Component } from 'react';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';


import { ListImageGallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    query: '',
  };

  
  render() {
    const { images } = this.props;
    // , onImageClick

    return (
      <ListImageGallery>
        {images.map((image) => (
          <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          largeImage={image.largeImageURL}
        //   onClick={onImageClick}
          />
        ))}
      </ListImageGallery>
    );
  }
}
