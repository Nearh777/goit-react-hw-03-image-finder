import { Component } from "react";
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled.jsx'


export class ImageGalleryItem extends Component {


    render() {
      const { imageUrl, alt, onClick } = this.props;

        return(
<GalleryItem>
  <GalleryItemImg src={imageUrl} alt={alt} onClick={onClick} />
</GalleryItem>
        )

    }
}
