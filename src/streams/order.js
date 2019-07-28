import request from 'request-promise';

const { REACT_APP_API_ENDPOINT } = process.env;

export const getOrders = () => {
  const options = {
    uri: `${REACT_APP_API_ENDPOINT}/getOrders`,
    json: true
  };
  return request(options);
};

