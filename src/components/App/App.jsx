import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

import { Searchbar } from '../Searchbar/Searchbar';
import { Gallery } from '../ImageGallery/ImageGallery';

// import { render } from '@testing-library/react';

export class App extends Component {
  state = {
    gallery: [],
  };

  componentDidMount() {
    const API_KEY = '34949231-97333589adf73858ce38633dc';
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(gallery => this.setState({gallery}));
  }

  handleFormSubmit = onSubmit => {
    this.setState({ onSubmit });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <Gallery />
      </Container>
    );
  }
}
