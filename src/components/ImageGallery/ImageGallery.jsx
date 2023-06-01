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

        {images && images.map((e) => (
          <ImageGalleryItem
          key={e.id}
          src={e.webformatURL}
          alt={e.tags}
          largeImage={e.largeImageURL}
        //   onClick={onImageClick}
          />
        ))}
      </ListImageGallery>
    );
  }
}
