// tslint:disable:quotemark

import axios from 'axios';
const url = 'http://localhost:8000';

export default () => {
  return axios.create({
    baseURL: url
  });
};
