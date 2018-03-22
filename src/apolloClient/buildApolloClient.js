import mapResourceTypeToResolver from './mapResourceTypeToResolver';
import buildQuery from './buildQuery';

export default (apolloClient) => {
  return async (type, resource, params) => {
    let data

    switch (type) {
      case 'GET_LIST':
      case 'GET_MANY':
      case 'GET_MANY_REFERENCE':
      case 'GET_ONE':
        data = await apolloClient
          .query(buildQuery(type, resource, params))
          .then(response => response.data[mapResourceTypeToResolver(type, resource)])

        return (data.length ? { data, total: data.length } : { data });
      case 'CREATE':
      case 'UPDATE':
      case 'DELETE':
        data = await apolloClient
          .mutate(buildQuery(type, resource, params))
          .then(response => {
            return response.data[mapResourceTypeToResolver(type, resource)]
          });
        return { data };
      default:
        throw new Error('Unsupported fetch type');
    }
  }
};
