import React, { Component } from 'react';
import { ButtonLoader } from './Button.styled';



export class Button extends Component {
    render() {
      const { onClick, children } = this.props;
  
      return <ButtonLoader type="button" className="button" onClick={onClick}>{children}</ButtonLoader>;
    }
  }
