import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import { getImg } from '../cervises/getImg';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
// import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
// import {Modal} from '../Modal/Modal';

// import { render } from '@testing-library/react';

export class App extends Component {
  state = {
    images: [],
    query: '',
    error: '',
    page: 1,
    // isLoading: false,
    showModal: false,
    selectedImage: '',
    status: 'idle',
  };

  // componentDidMount() {
  //   this.fetchImages();
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = () => {
  //   const { isLoading } = this.state;

  //   if (isLoading) return;

  //   const windowHeight = window.innerHeight;
  //   const documentHeight = document.documentElement.offsetHeight;
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   const scrollBottom = scrollTop + windowHeight;

  //   if (documentHeight - scrollBottom < 100) {
  //     this.handleLoadMore();
  //   }
  // };

  // handleFormSubmit = value => {
  //   this.setState({ value, page: 1, images: [] });
  // };

  handleSearch = query => {
    this.setState({ query, page: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.setState({ status: 'pending' });
      getImg(query)
        .then(respons => respons.json())
        .then(data => {
          if (data.hits === 'ok') {
            this.setState(prevState => ({
              images: [...prevState.images, ...data.hits],
              status: 'resolved',
            }));
          } else {
            return Promise.reject(data.message);
          }
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        })
        // .finally(() => {
        //   this.setState({ isLoading: false });
        // });

      // return this.handleImageClick();
    }
  }

  // getImg(query);
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.state.value)
  //   if(prevState.value !== this.state.value) {
  //   return this.handleImageClick();
  //   }
  // }

  // handleLoadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };

  handleImageClick = imageUrl => {
    this.setState({ selectedImage: imageUrl, showModal: true });
  };

  // handleCloseModal = () => {
  //   this.setState({ showModal: false });
  // };

  // fetchImages = () => {
  //   const { value, page } = this.state;
  //   const apiKey = '34949231-97333589adf73858ce38633dc';
  //   const url = `https://pixabay.com/api/?q=${value}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

  //   this.setState({ isLoading: true });

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...data.hits],
  //       }));
  //     })
  //     .finally(() => {
  //       this.setState({ isLoading: false });
  //     });
  // };

  render() {
    const { images, error } = this.state;
    // isLoading, showModal, selectedImage, isLoading

    if (this.state.status === 'pending') return( <Loader />);
    else if (this.state.status === 'resolved') return(      
        <ImageGallery query={this.handleSearch} images={images} />   
    );
    else if (this.state.status === 'rejected') return (<h1>{error}</h1>);
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch} />
        {/* onSubmit={this.handleFormSubmit}  */}
        <ToastContainer autoClose={2000} />
        {/* {error && <h1>{error}</h1>} */}
        {/* {isLoading && <Loader />} */}
        {/* <ImageGallery query={this.handleSearch} images={images} /> */}
        {/* images={images} onImageClick={this.handleImageClick}  */}
        {/* {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )} */}
        {/* {showModal && (
          <Modal
            imageUrl={selectedImage}
            alt="Selected Image"
            onClose={this.handleCloseModal}
          />
        )} */}
      </Container>
    );
  }
}

//   componentDidMount() {
//     const API_KEY = '34949231-97333589adf73858ce38633dc';
//     const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//     fetch(
//       url
//     )
//       .then(res => res.json())
//       .then(data => {
//         this.setState(prevState => ({
//           images: [...prevState.images, ...data.hits],
//         }));
//   })

//   handleFormSubmit = onSubmit => {
//     this.setState({ onSubmit });
//   };

//   render() {
//     return (
//       <Container>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ToastContainer autoClose={3000} />
//         <Gallery />
//       </Container>
//     );
//   }
// }
