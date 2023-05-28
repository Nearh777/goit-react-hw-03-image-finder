import React, { Component } from 'react';
import { Overlay, ModalWindow, Img  } from './Modal.styled';

export class Modal extends Component {
  render() {
    const { imageUrl, alt, onClose } = this.props;

    return (
      <Overlay onClick={onClose}>
        <ModalWindow >
          <Img src={imageUrl} alt={alt} />
        </ModalWindow>
      </Overlay>
    );
  }
}
