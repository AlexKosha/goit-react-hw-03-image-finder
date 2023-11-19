import axios from 'axios';

const API_KEY = '39799676-ffca3689f9c6f15d7ef094ccc';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
export const getImage = async (query, page) => {
  const fetchImage = await axios.get(`?q=${query}&page=${page}`);
  return fetchImage.data;
};

// export function fetchGallery(query, page) {
//   const KEY = '39799676-ffca3689f9c6f15d7ef094ccc';
//   return fetch(
//     `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(new Error('not defined'));
//   });
// }
