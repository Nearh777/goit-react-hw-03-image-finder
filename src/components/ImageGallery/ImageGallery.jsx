import { Component } from "react";
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'

import {ImageGallery } from './ImageGallery.styled';

export class Gallery extends Component  {


    render(){

        return(
<ImageGallery >
<ImageGalleryItem />
</ImageGallery>
        )
    }
}
