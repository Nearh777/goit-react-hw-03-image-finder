
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '34949231-97333589adf73858ce38633dc';
export const getImg = (query) => {
return fetch(`${BASE_URL}/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
);
}