import { LoadMoreBtn } from './LoadMore.styled';

export const LoadMore = ({ onClick }) => (
  <LoadMoreBtn type="button" onClick={onClick}>
    Load more
  </LoadMoreBtn>
);
