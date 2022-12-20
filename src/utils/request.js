import { REQUEST_URL } from '@/constants';

// let isReported = false;

export const get = (...args) => {
  const [url, config] = args;
  return request(url, { ...config, method: 'GET' });
};

export const post = (...args) => {
  const [url, config] = args;
  return request(url, { ...config, method: 'POST' });
};

export const _delete = (...args) => {
  const [url, config] = args;
  return request(url, { ...config, method: 'DELETE' });
};

// const preLoadUserAuth = async (authCode, channelCode) => {
//   const appKey = uni.getStorageSync('appKey');
//   return uni
//     .request({
//       url: REQUEST_URL + '/user/base/auth',
//       data: { authCode, appletAccount: appKey },
//       header: { 'channel-code': channelCode },
//       method: 'POST',
//     })
//     .then((values) => {
//       if (values.length === 2) {
//         const [_, result] = values;
//         const { data } = result.data;
//         return data;
//       }
//     });
// };

// const postReportChannel = async (channelCode) => {
//   const userToken = uni.getStorageSync('authToken');
//   return uni.request({
//     url: REQUEST_URL + '/channel/report',
//     data: { channelCode },
//     header: { userToken, 'channel-code': channelCode },
//     method: 'POST',
//   });
// };

const _request = (url, config) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...config,
      url,
      success({ data }) {
        if (data.code === 0) {
          return resolve(data.data);
        } else {
          return reject(new Error(data.msg));
        }
      },
      fail(err) {
        const { msg } = err.data;
        return reject(new Error(msg));
      },
    });
  });
  // .then((values) => {
  //   console.log(values)
  //   if (values.length === 2) {
  //     const [_, result] = values;
  //     const { data, code } = result.data;
  //     // 未登录
  //     // if (data.code === 109 && !isSetTokenExpired) {
  //     //   uni.showToast({ title: data.msg });
  //     //   isSetTokenExpired = true;
  //     //   setTimeout(() => {
  //     //     uni.redirectTo({ url: '/pages/login/index' });
  //     //     isSetTokenExpired = false;
  //     //   }, 300);
  //     //   return;
  //     // }
  //     if (code === 1) {
  //       return data;
  //     }
  //   } else {
  //     const current = values[0];
  //     return Promise.reject(current.errMsg);
  //   }
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
};

export const request = async (url, config) => {
  // const authToken = uni.getStorageSync('authToken');
  // const query = uni.getStorageSync('query');
  // const channelCode = query ? query.channel : 'nature';
  // const { authCode } = await my.getAuthCode({ scopes: 'auth_base' });
  // if (!authToken) {
  //   const { userToken, aliUserId } = await preLoadUserAuth(
  //     authCode,
  //     channelCode,
  //   );
  //   uni.setStorageSync('authToken', userToken);
  //   uni.setStorageSync('uid', aliUserId);
  // }

  // if (!isReported) {
  //   await postReportChannel(channelCode);
  //   isReported = true;
  // }
  return _request(REQUEST_URL + url, config);
};
