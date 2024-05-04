import axios from 'axios';
import { API_BASE_URL } from '../constants';

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

// apiInstance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// apiInstance.interceptors.response.use(
//   (res) => {
//     if (res.data.status_code === 403) { // User is disabled, deleted or password changed
//       // TokenService.removeUser();
//       window.location.href = '/login';
//     }
//     return res;
//   },
//   async (err) => {

//     // if (!TokenService.getUserType()) {
//     //   return;
//     // }
//     const originalConfig = err.config;

//     if (originalConfig.url !== '/login' && err.response) {
//       if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
//         // if refresh_token expires log out user from the application.
//         // TokenService.removeUser();
//         try {

//           // send refresh_token to fetch new access_token.
//           // const res = await apiInstance.post<IRefreshTokenResponse>('/users/acess_token', { 'action': 'access_token' }, {
//           //   headers: {
//           //     // 'x-refresh-token': TokenService.getLocalRefreshToken()
//           //   }
//           // });
//           // check if we get the access_token, if yes, that means refresh_token is not expired.
//           // fetch access_token and update it in local_storage.
//           // if (res?.data?.data && res.data.data.access_token) {
//           //   // TokenService.updateLocalAccessToken(res.data.data.access_token);
//           // } else {
//           //   // if refresh_token expires log out user from the application.
//           //   // TokenService.removeUser();
//           //   return;
//           // }
//           return apiInstance(originalConfig);
//         } catch (_error) {
//           return Promise.reject(_error);
//         }
//       } else if (err.response.status === 403) { // User is disabled, deleted or password changed
//         // TokenService.removeUser();
//       }
//     }
//   }
// );

const api = {
  apiInstance
};

export default api;