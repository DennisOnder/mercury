// tslint:disable:quotemark

import axios from 'axios';
const url = 'http://localhost:8000/api/test';

class DashboardService {
  // Test
  public testApi() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default DashboardService;
