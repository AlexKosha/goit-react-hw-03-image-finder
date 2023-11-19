import styled from '@emotion/styled';

export const ImageGalleryItem = styled.li`
  border-radius: 2px;
  &:hover {
    background-color: rgb(153, 50, 50);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 360px;
  height: 300px;
  cursor: pointer;
`;
