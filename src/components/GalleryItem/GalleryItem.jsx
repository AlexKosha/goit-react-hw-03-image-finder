import { Image, ImageGalleryItem } from './GalleryItem.styled';

export const GalleryItem = ({ images, onClick }) => {
  return images.map(({ id, largeImageURL, tags, webformatURL }) => (
    <ImageGalleryItem key={id}>
      <Image
        src={webformatURL}
        alt={tags}
        width={360}
        height={300}
        onClick={() => onClick(largeImageURL)}
      />
    </ImageGalleryItem>
  ));
};
