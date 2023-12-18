import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_bZyRPLm1uOYS9QPcxpbkaFgc11d5jjub0iIvWku5Ip9NDOKpHyQv7K9zy4soAjCd';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data);
}

export async function fetchDogByBreed(breedId) {
  return await axios
    .get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}