import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner';
import { Searchbar } from './Seacrhbar/Searchbar';
import { Header } from './Header/Header';
import { Gallery } from './Gallery/Gallery';
import { GalleryItem } from './GalleryItem/GalleryItem';
// import { fetchGallery } from 'service/pixabay-api';
import { LoadMore } from './LoadMore/LoadMore';
import Modal from './Modal/Modal';
import * as ImageService from 'service/pixabay-api';

export class App extends Component {
  state = {
    query: '',
    images: null,
    page: 1,
    loadMore: false,
    loading: false,
    showModal: false,
    selectedImage: null,
  };

  getnImage = async () => {
    const { query, page } = this.state;
    this.setState({ loading: true, loadMore: false });
    try {
      const dataImage = await ImageService.getImage(query, page);
      if (dataImage.hits.length === 0) {
        toast.error('No images found!');
        return;
      }
      const { hits, totalHits } = dataImage;
      this.setState(({ images }) => ({
        images: images ? [...images, ...hits] : hits,
        loadMore: page < Math.ceil(totalHits / 12) ? true : false,
      }));
    } catch (error) {
      this.setState({ images: null });
      toast.error('Oops! Something went wrong!');
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevState.query;
    const nextValue = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevValue !== nextValue || prevPage !== nextPage) {
      this.getnImage();
    }
  }

  addValue = value => {
    if (value !== this.state.query) {
      return this.setState({
        query: value,
        images: null,
        page: 1,
        loadMore: false,
        showModal: false,
      });
    }
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  toggleModal = selectedImage => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedImage,
    }));
  };

  render() {
    const { images, loadMore, loading, showModal, selectedImage } = this.state;

    return (
      <>
        <Header>
          <Searchbar onSubmit={this.addValue} />
        </Header>
        <Gallery>
          {images && <GalleryItem images={images} onClick={this.toggleModal} />}
        </Gallery>
        {loading && <InfinitySpin width="200" color="blue" />}
        {loadMore && <LoadMore onClick={this.handleLoadMore} />}
        {showModal && (
          <Modal onClose={this.toggleModal} ImageUrl={selectedImage} />
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
